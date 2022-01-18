let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
3
7`;

input = input.split("\n").slice(1);

let answer = "";

for (let i = 0; i < input.length; i++) {
  let res = [[1]];
  for (let j = 2; j <= input[i]; j++) {
    const len = res.length;
    for (let k = 0; k < len; k++) {
      res = [
        ...res,
        [...res[k], " ", j],
        [...res[k], "+", j],
        [...res[k], "-", j],
      ];
    }
  }

  const tmp = res
    .filter((r) => r.length === input[i] * 2 - 1)
    .map((r) => r.join(""));

  for (let j = 0; j < tmp.length; j++) {
    if (eval(tmp[j].replace(/(\s*)/g, "")) === 0) {
      answer += `${tmp[j]}\n`;
    }
  }

  answer += "\n";
}

console.log(answer.trim());
