// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const arr = input.map((str) => str.split(" ").map((char) => +char));

const recursive = (x, y, n) => {
  if (n === 1) {
    return arr[x][y] === 1 ? { blue: 1, white: 0 } : { white: 1, blue: 0 };
  } else {
    const len = n / 2;
    const a = recursive(x, y, len);
    const b = recursive(x + len, y, len);
    const c = recursive(x, y + len, len);
    const d = recursive(x + len, y + len, len);

    // NOTE 합으로 확인하면 안 됨, w 1, b 3으로 이루어진 len = 8 짜리 색종이가 있을 경우 w가
    // 모두 1인지 조건으로 확인해야 색종이가 한장으로 합쳐지는지 알 수 있음
    const white = a.white + b.white + c.white + d.white;
    const blue = a.blue + b.blue + c.blue + d.blue;

    console.log(n);
    console.log(
      "white",
      white === 4 ? 1 : white,
      "blue",
      blue === 4 ? 1 : blue
    );
    return {
      white: white === 4 ? 1 : white,
      blue: blue === 4 ? 1 : blue,
    };
  }
};

const input = [
  "1 1 0 0 0 0 1 1",
  "1 1 0 0 0 0 1 1",
  "0 0 0 0 1 1 0 0",
  "0 0 0 0 1 1 0 0",
  "1 0 0 0 1 1 1 1",
  "0 1 0 0 1 1 1 1",
  "0 0 1 1 1 1 1 1",
  "0 0 1 1 1 1 1 1",
];

const arr = input.map((str) => str.split(" ").map((char) => +char));

console.log(recursive(0, 0, arr[0].length));
