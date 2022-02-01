let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("/n")
    : ["7 1 2 3 4 5 6 7", "8 1 2 3 5 8 13 21 34", "0"];

input = input.map((str) => str.split(" "));

const LOTTO_LENGTH = 6;
let results = "";

const permutation = (i, acc, arr) => {
  if (i === arr.length) {
    return;
  }
  if (acc.length === LOTTO_LENGTH - 1) {
    results += `${[...acc, arr[i]].join(" ")}\n`;
  }
  permutation(i + 1, [...acc, arr[i]], arr);
  permutation(i + 1, acc, arr);
};

for (let i = 0; i < input.length - 1; i++) {
  permutation(0, [], input[i].slice(1));
  results += "\n";
}

console.log(results.trim());
