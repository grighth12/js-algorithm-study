const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `4`;

const n = +input;

const dp = [0, 1, 2];

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[n]);
