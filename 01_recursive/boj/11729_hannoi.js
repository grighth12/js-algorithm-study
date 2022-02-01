let count = 0;
let process = "";

const hanoi = (n, start, end) => {
  if (n === 1) {
    count += 1;
    process += `${start} ${end}\n`;
    return;
  } else {
    const tmp = 6 - start - end;
    hanoi(n - 1, start, tmp);
    count += 1;
    process += `${start} ${end}\n`;
    hanoi(n - 1, tmp, end);
  }
};

const n = require("fs").readFileSync("/dev/stdin").toString();
hanoi(+n, 1, 3);
console.log(count);
console.log(process);
