// Поиск в ширину в графе
let count = 0;
const graph = {
  a: ['b', 'c'],
  b: ['f'],
  c: ['d', 'e'],
  d: ['f'],
  e: ['f'],
  f: ['g']
};

function breadthSearch(graph, start, end) {
  let queue = [start];
  while (queue.length > 0) {
    count++;
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    }
    for (let i = 0; i < graph[current].length; i++) {
      queue.push(graph[current][i]);
    }

  }
  return false;
}

console.log(breadthSearch(graph, 'a', 'g'),count);