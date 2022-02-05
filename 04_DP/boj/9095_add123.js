const fs = require("fs");
const [count, ...arr] = fs.readFileSync("./dev/stdin").toString().split("\n");
const result = [];

const [cnt, ...arr] = input.map((i) => Number(i));

const d = [0, 1, 2, 4];

for (let i = 4; i < 11; i++) {
  d[i] = d[i - 1] + d[i - 2] + d[i - 3];
}

for (let i = 0; i < arr.length; i++) {
  console.log(d[arr[i]]);
}
