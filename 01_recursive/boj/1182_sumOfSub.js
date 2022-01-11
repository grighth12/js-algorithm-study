const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : ["5 0", "-7 -3 -2 5 8"];

const N = +input[0].split(" ")[0];
const S = +input[0].split(" ")[1];
const arr = input[1].split(" ").map((char) => +char);
let cnt = 0;

const recursive = (i, acc) => {
  if (N === i) return;

  // TODO acc + arr[i] 해야 하는 이유 확실히 이해하기
  if (S === acc + arr[i]) {
    cnt++;
    // NOTE 끝까지 봐야 하므로 return 하면 안됨
    // 1 -1 1 -1 1 -1의 경우
  }

  // 선택한 경우 축적해서 보내고
  recursive(i + 1, acc + arr[i]);
  // 선택하지 않은 경우 그냥 보냄
  recursive(i + 1, acc);
};

recursive(0, 0);
console.log(cnt);
