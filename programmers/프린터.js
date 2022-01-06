function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({
    // 타겟인지 map을 할 때 미리 계산
    isTarget: location === index,
    priority,
  }));

  let cnt = 0;

  while (queue.length !== 0) {
    const curr = queue.shift();

    if (queue.some(({ priority }) => priority > curr.priority)) {
      queue.push(curr);
    } else {
      cnt += 1;
      if (curr.isTarget) return cnt;
    }
  }
}

console.log(solution([1, 1, 1, 1, 1, 1], 5));
