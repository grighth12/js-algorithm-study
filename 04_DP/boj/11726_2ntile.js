const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `9`;

const n = +input;

const dp = [0, 1, 2, 3];

for (let i = 4; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
