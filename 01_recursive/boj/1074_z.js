const input =
  process.platform === "linux"
    ? require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .split(" ")
        .map((n) => +n)
    : [2, 3, 1];

const n = input[0];
const r = input[1];
const c = input[2];
let count = 0;

const recursive = (x, y, size) => {
  if (x === r && y === c) {
    console.log(count);
    return;
  }

  if (r >= x && c >= y && r < x + size && c < y + size) {
    recursive(x, y, size / 2);
    recursive(x, y + size / 2, size / 2);
    recursive(x + size / 2, y, size / 2);
    recursive(x + size / 2, y + size / 2, size / 2);
  } else {
    count += size * size;
  }
};

recursive(0, 0, 2 ** n);
