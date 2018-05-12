class Graph {
  constructor(v) {
    // 顶点数量
    this.vertices = v;
    // 边数
    this.edges = 0;
    // 邻接表
    this.adj = [];
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = [];
    }
  }

  /*
  * 添加一条边, 传入两个顶点 v, w
  * 函数查找顶点 v 的邻接表, 将顶点 w 添加到列表中
  * 函数查找顶点 w 的邻接表, 将顶点 v 添加到列表中
  * */
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  toString() {
  }

  showGraph() {
    for (let i = 0; i < this.vertices; i++) {
      for (let j = 0; j < this.vertices; j++) {
        const obj = this.adj[i][j];
        if (obj !== undefined) {
          console.log('graph.js: 34 -> showGraph -> ', `${i} -> ${obj}`);
        }
      }
    }
  }
}


class Vertex {
  constructor(label) {
    this.label = label;
  }
}

module.exports = Graph;