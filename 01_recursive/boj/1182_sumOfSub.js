const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : ["5 0", "-7 -3 -2 5 8"];

const N = +input[0].split(" ")[0];
const S = +input[0].split(" ")[1];
const arr = input[1].split(" ").map((char) => +char);

let cnt = 0;
const recursive = (index, sum) => {
  if (index === N) return;
  if (sum + arr[index] === S) cnt += 1;

  recursive(index + 1, sum);
  recursive(index + 1, sum + arr[index]);
};

recursive(0, 0);

console.log(cnt);
