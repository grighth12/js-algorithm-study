let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `2
3
7`;

input = input.split("\n").slice(1);

let answer = "";

for (let i = 0; i < input.length; i++) {
  let res = ["1"];
  for (let j = 2; j <= input[i]; j++) {
    const len = res.length;
    for (let k = 0; k < len; k++) {
      res = [...res, res[k] + " " + j, res[k] + "+" + j, res[k] + "-" + j];
    }

    res = res.slice(len);
  }

  for (let j = 0; j < res.length; j++) {
    if (eval(res[j].replace(/(\s*)/g, "")) === 0) {
      answer += `${res[j]}\n`;
    }
  }

  answer += "\n";
}

console.log(answer.trim());
