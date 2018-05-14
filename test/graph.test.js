const Graph = require('../graph');

it('graph', () => {
  const g = new Graph(5);
  g.addEdge(3, 2);
  g.addEdge(0, 2);
  g.addEdge(0, 1);
  g.addEdge(2, 4);
  g.showGraph();
});

it('graph dfs', () => {
  const g = new Graph(10);
  g.addEdge(0, 2);
  g.addEdge(0, 1);
  g.addEdge(2, 4);
  g.addEdge(4, 8);
  g.addEdge(2, 9);
  g.addEdge(4, 5);
  g.addEdge(8, 7);
  g.addEdge(0, 8);
  g.addEdge(0, 7);
  g.dfs(0);
});

it('graph bfs', () => {
  const g = new Graph(10);
  g.addEdge(0, 2);
  g.addEdge(0, 1);
  g.addEdge(2, 4);
  g.addEdge(4, 8);
  g.addEdge(2, 9);
  g.addEdge(4, 5);
  g.addEdge(8, 7);
  g.addEdge(0, 8);
  g.addEdge(0, 7);
  g.bfs(0);
});

it('graph shortest path 1', () => {
  const g = new Graph(5);
  g.addEdge(0, 2);
  g.addEdge(0, 1);
  g.addEdge(2, 4);
  g.addEdge(4, 3);
  g.addEdge(3, 2);
  g.bfs(0);

  expect(g.pathTo(4)).toEqual([4, 2, 0]);
});

it('graph shortest path 2', () => {
  const g = new Graph(5);
  g.addEdge(0, 2);
  g.addEdge(0, 1);
  g.addEdge(2, 4);
  g.addEdge(0, 4);
  g.addEdge(4, 3);
  g.addEdge(3, 2);
  g.bfs(0);

  expect(g.pathTo(4)).toEqual([4, 0]);
});
