let input =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `7\n9 9 9 9 9 9 9\n9 2 1 2 1 2 9\n9 1 8 7 8 1 9\n9 2 7 9 7 2 9\n9 1 8 7 8 1 9\n9 2 1 2 1 2 9\n9 9 9 9 9 9 9`;

input = input.split("\n").slice(1);

const arr = input.map((str) => str.split(" ").map((char) => +char));

const getRange = (arr) => [...new Set(arr.flat())];

const range = getRange(arr);
const dx = [0, -1, 1, 0];
const dy = [-1, 0, 0, 1];

const findStartCoords = (map, visited) => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] && !visited[i][j]) return [i, j];
    }
  }
};

const solution = (arr) => {
  let max = 0;
  for (let i = 0; i < range.length; i++) {
    let queue = [];
    let count = 0;

    const map = arr.map((sub, j) =>
      sub.map((value, k) => {
        if (value > range[i] && queue.length === 0) {
          queue.push([j, k]);
        }
        return value > range[i];
      })
    );
    const visited = arr.map((sub) => sub.map(() => false));

    while (queue.length !== 0) {
      let x = queue[0][0];
      let y = queue[0][1];
      queue = queue.slice(1);

      visited[x][y] = true;
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < map.length &&
          ny >= 0 &&
          nx < map.length &&
          map[nx][ny] &&
          !visited[nx][ny]
        ) {
          queue = [...queue, [nx, ny]];
          visited[nx][ny] = true;
        }
      }

      if (queue.length === 0) {
        const nextStart = findStartCoords(map, visited);
        count += 1;
        if (nextStart) {
          queue = [nextStart];
        }
      }
    }

    if (max < count) {
      max = count;
    }
  }

  return max;
};

console.log(solution(arr));
