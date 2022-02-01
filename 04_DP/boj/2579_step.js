const input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `6
10
20
15
25
10
20`;

const [cnt, ...steps] = input.split("\n").map((val) => +val);

const d = Array.from({ length: steps.length + 1 }, () =>
  Array.from({ length: 3 }, () => 0)
);
// 첫 번째 계단을 밟았을 때
d[1][1] = steps[0];
d[1][2] = 0;

// 두번 째 계단을 밟았을 때
d[2][1] = steps[1];
d[2][2] = steps[0] + steps[1];

for (let i = 3; i <= steps.length; i++) {
  d[i][1] = Math.max(d[i - 2][1], d[i - 2][2]) + steps[i - 1];
  d[i][2] = d[i - 1][1] + steps[i - 1];
}

console.log(Math.max(d[cnt][1], d[cnt][2]));
