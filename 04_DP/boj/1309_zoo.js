const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : "4";

const n = +input;

const dp = Array.from({ length: n }, () => []).map(() => [0, 0, 0]);

dp[0][0] = 1;
dp[0][1] = 1;
dp[0][2] = 1;

for (let i = 1; i < n; i++) {
  dp[i][0] = (dp[i - 1][1] + dp[i - 1][2]) % 9901;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 9901;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % 9901;
}

console.log((dp[n - 1][0] + dp[n - 1][1] + dp[n - 1][2]) % 9901);
