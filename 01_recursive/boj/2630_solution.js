// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const arr = input.map((str) => str.split(" ")).map((char) => +char);

const recursive = (x, y, n) => {
  //   console.log(n);
  if (n === 2) {
    if (
      (arr[x][y] + arr[x][y + 1] + arr[x + 1][y] + arr[x + 1][y + 1]) % 4 ===
      0
    ) {
      return 1;
    } else {
      return 4;
    }
  } else {
    return (
      recursive(0, 0, n / 2) +
      recursive(0, n / 2, n / 2) +
      recursive(n / 2, 0, n / 2) +
      recursive(n / 2, n / 2, n / 2)
    );
  }
};

const input = [
  "1 1 0 0 0 0 1 1",
  "1 1 0 0 0 0 1 1",
  "0 0 0 0 1 1 0 0",
  "0 0 0 0 1 1 0 0",
  "1 0 0 0 1 1 1 1",
  "0 1 0 0 1 1 1 1",
  "0 0 1 1 1 1 1 1",
  "0 0 1 1 1 1 1 1",
];

const arr = input.map((str) => str.split(" ").map((char) => +char));

console.log(arr);
console.log(recursive(0, 0, arr[0].length));
