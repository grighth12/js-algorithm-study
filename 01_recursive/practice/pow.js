/*
 * 1. 1승을 계산할 수 있다.
 * 2. k승을 계산했으면, 2k승과 2k+1승도 O(1)에 계산할 수 있다.
 */

const pow = (a, b, c) => {
  // base condition
  if (b === 1) return a % m;

  let val = pow(a, b / 2, c);
  val = (val * val) % m;
  if (b % 2 === 0) return val;
  else return (val * a) % m;
};

console.log((10, 11, 12));

// 1. hannoi(5, 1, 3)
// 2. hannoi(4, 2, 3)
// 3. hannoi(3, 2, 1)
// 4. hannoi(2, 1, 2)
