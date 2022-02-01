const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : [
        "8",
        "1 1 0 0 0 0 1 1",
        "1 0 1 0 0 0 1 1",
        "0 0 0 0 1 1 0 0",
        "0 0 0 0 1 1 0 0",
        "1 0 0 0 1 1 1 1",
        "0 1 0 0 1 1 1 1",
        "0 0 1 1 1 1 0 1",
        "0 0 1 1 1 1 1 1",
      ];

const recursive = (x, y, n) => {
  if (n === 1) {
    return arr[x][y] === 1 ? { blue: 1, white: 0 } : { white: 1, blue: 0 };
  } else {
    const len = n / 2;
    const a = recursive(x, y, len);
    const b = recursive(x + len, y, len);
    const c = recursive(x, y + len, len);
    const d = recursive(x + len, y + len, len);

    // NOTE 전체 면이 white인지 blue인지 체크하는 조건문에서 실수 자주 함
    // 1. a.white ~ d.white 더한 값이 4인가? 로 확인했는데 예외가 있었음 w:2, b:2 / w: 2, b: 2 / w:0, b:0 / w:0, b:0 인 경우 w:4, b:4 여야 하지만 초기 조건으로 확인할 경우 w: 0, b: 0이 됨
    // 2. 문제 확인 후 a.white ~ d.white가 모두 1인가?로 확인했는데 이 역시 w:1, b:3 / w:1, b:3 / w:1, b:3 / w:1, b:3 인 경우 w:4, b: 12 여야 하지만 해당 조건으로 확인할 경우 w: 1, b: 4가 됨
    // 3. 결론적으로 모든 면이 하얀색인지 확인하려면 모두 w:1 b:0으로 이루어져 있는지 검사해야 함
    const white =
      a.white === 1 &&
      a.blue === 0 &&
      b.white === 1 &&
      b.blue === 0 &&
      c.white === 1 &&
      c.blue === 0 &&
      d.white === 1 &&
      d.blue === 0
        ? 1
        : a.white + b.white + c.white + d.white;

    const blue =
      a.white === 0 &&
      a.blue === 1 &&
      b.white === 0 &&
      b.blue === 1 &&
      c.white === 0 &&
      c.blue === 1 &&
      d.white === 0 &&
      d.blue === 1
        ? 1
        : a.blue + b.blue + c.blue + d.blue;

    return {
      white,
      blue,
    };
  }
};

const arr = input.slice(1).map((str) => str.split(" ").map((char) => +char));

const result = recursive(0, 0, input[0]);
console.log(result.white);
console.log(result.blue);

// * 게시판에서 찾고 시도해본 반례들
//   [
//     "8",
//     "1 1 0 0 0 0 1 1",
//     "1 0 1 0 0 0 1 1",
//     "0 0 0 0 1 1 0 0",
//     "0 0 0 0 1 1 0 0",
//     "1 0 0 0 1 1 1 1",
//     "0 1 0 0 1 1 1 1",
//     "0 0 1 1 1 1 0 1",
//     "0 0 1 1 1 1 1 1",
//   ]

// ["4", "1 1 1 1", "1 1 1 1", "1 1 1 1", "1 1 1 1"]

//   [
//     "8",
//     "1 1 0 0 0 0 1 1",
//     "1 1 0 0 0 0 1 1",
//     "0 0 0 0 1 1 0 0",
//     "0 0 0 0 1 1 0 0",
//     "1 0 0 0 1 1 1 1",
//     "0 1 0 0 1 1 1 1",
//     "0 0 1 1 1 1 1 1",
//     "0 0 1 1 1 1 1 1",
//   ];
