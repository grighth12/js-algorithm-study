let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
3
7`;

input = input.split("\n").slice(1);

let ops = [];
const combinations = (n, acc) => {
  if (acc.length === n) {
    ops.push(acc);
    return;
  }

  combinations(n, [...acc, " "]);
  combinations(n, [...acc, "+"]);
  combinations(n, [...acc, "-"]);
};

let answer = "";

for (let i = 0; i < input.length; i++) {
  ops = [];
  combinations(input[i] - 1, []);

  const arr = Array.from({ length: input[i] }, (_, index) => `${index + 1}`);
  for (let j = 0; j < ops.length; j++) {
    const m = arr.map((item, k) =>
      k !== arr.length - 1 ? item + ops[j][k] : item
    );

    if (eval(m.join("").replace(/(\s*)/g, "")) === 0) {
      answer += `${m.join("")}\n`;
    }
  }
  answer += "\n";
}

console.log(answer.trim());
