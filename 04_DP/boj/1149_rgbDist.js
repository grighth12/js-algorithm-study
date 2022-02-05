const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`;

const [cnt, ...arr] = input.split("\n");
const rgb = arr.map((row) => row.split(" ").map((v) => +v));

const dp = Array.from({ length: rgb.length + 1 }, () => []);

dp[1][0] = rgb[0][0];
dp[1][1] = rgb[0][1];
dp[1][2] = rgb[0][2];

for (let i = 2; i <= rgb.length; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i - 1][0];

  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i - 1][1];

  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i - 1][2];
}

const len = rgb.length;
console.log(Math.min(dp[len][0], dp[len][1], dp[len][2]));
