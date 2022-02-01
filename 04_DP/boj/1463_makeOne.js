let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `10`;

input = +input;

const solution = (n) => {
  const d = [0, 0];

  for (let i = 2; i <= n; i++) {
    d[i] = Math.min(
      i % 2 === 0 ? d[i / 2] + 1 : Number.MAX_SAFE_INTEGER,
      i % 3 === 0 ? d[i / 3] + 1 : Number.MAX_SAFE_INTEGER,
      d[i - 1] + 1
    );
  }

  return d[n];
};

console.log(solution(input));
