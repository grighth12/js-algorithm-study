const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().trim()
    : `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`;

const [n, ...m] = input.split("\n").map((str) => str.split(" ").map((v) => +v));
const res = m.filter((_, i) => i % 3 !== 0);
let answer = ``;

for (let i = 0; i < n; i++) {
  const arr = [res[i * 2], res[i * 2 + 1]];
  const dp = arr.map((row) => row.map(() => 0));

  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];

  dp[0][1] = arr[1][0] + arr[0][1];
  dp[1][1] = arr[0][0] + arr[1][1];

  const N = arr[0].length;

  for (let j = 2; j < N; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], dp[0][j - 2], dp[1][j - 2]) + arr[0][j];
    dp[1][j] = Math.max(dp[0][j - 1], dp[1][j - 2], dp[0][j - 2]) + arr[1][j];
  }

  answer += `${Math.max(dp[0][N - 1], dp[1][N - 1])}\n`;
}

console.log(answer.trim());
