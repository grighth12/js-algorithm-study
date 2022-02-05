const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `5 3
5 4 3 2 1
1 3
2 4
5 5`;

let [, arr, ...inputs] = input.split("\n");

arr = arr.split(" ").map((v) => +v);
inputs = inputs.map((r) => r.split(" ").map((v) => +v));

const dp = [0];
for (let i = 1; i <= arr.length; i++) {
  dp[i] = dp[i - 1] + arr[i - 1];
}

let res = "";
for (let k = 0; k < inputs.length; k++) {
  const [i, j] = inputs[k];
  res += `${dp[j] - dp[i - 1]}\n`;
}

console.log(res);
