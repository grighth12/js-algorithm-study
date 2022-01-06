function solution(priorities, location) {
  const prioritiesIndex = priorities.map((priority, index) => ({
    index,
    priority,
  }));

  let cnt = 0;
  let maxPriority = Math.max(
    ...prioritiesIndex.map(({ priority }) => priority)
  );
  while (prioritiesIndex.length !== 0) {
    const curr = prioritiesIndex.shift();
    const { priority, index } = curr;
    if (priority === maxPriority) {
      if (index === location) return cnt + 1;

      cnt += 1;
      maxPriority = Math.max(
        ...prioritiesIndex.map(({ priority }) => priority)
      );
    } else {
      prioritiesIndex.push(curr);
    }
  }

  return cnt;
}
