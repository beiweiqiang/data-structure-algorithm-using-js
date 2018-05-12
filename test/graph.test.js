const Graph = require('../graph');

it('graph', () => {
  const g = new Graph(5);
  g.addEdge(3, 2);
  g.addEdge(0, 2);
  g.addEdge(0, 1);
  g.addEdge(2, 4);
  g.showGraph();
});

