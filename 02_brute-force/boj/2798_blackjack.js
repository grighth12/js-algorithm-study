let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString().split("\n")
    : ["3 10", "1 2 3"];

input = input.map((str) => str.split(" ").map((char) => +char));

const solution = (m, arr) => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === m) return sum;
        if (m - sum > 0 && m - sum < m - answer) {
          answer = sum;
        }
      }
    }
  }

  return answer;
};

const m = input[0][1];
const arr = input[1];
console.log(solution(m, arr));
