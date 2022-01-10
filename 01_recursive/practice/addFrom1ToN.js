const add = (n) => {
  if (n === 1) {
    return 1;
  }

  return n + add(n - 1);
};

console.log(add(10));

// * 함수를 귀납적으로 이해해보기
/*
 * 1. add(1)은 1이다.
 * 2. add(k)가 k + k-1 + k-2 + ... 1이면, add(k+1)은 k+1 + k + k-1 + ... + 1이다.
 */
