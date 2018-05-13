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

    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
      this.marked[i] = false;
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

  /*
  * 深度优先搜索
  * 访问一个没有访问过的顶点, 将它标记为已访问,
  * 如果这个顶点的邻接表中有其他顶点是未访问过的, 递归进行访问
  *
  * */
  dfs(v) {
    // 标志该顶点已经 visited
    this.marked[v] = true;
    console.log('graph.js: 50 -> dfs -> ', v);
    // 检查该顶点的邻接表, 如果存在没有 visited 的顶点, 递归调用 dfs
    for (const w of this.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(w);
      }
    }
  }

  /*
  * 广度优先搜索
  * 使用队列对已访问的顶点进行排序
  * 首先, 建立一个已访问顶点队列.
  * 算法:
  * 1 查找与当前顶点相邻的所有未访问顶点, 设置成已访问, 然后添加到队列
  * 2 从队列头取出 v, 查看 v 是否有相邻的未访问的顶点, 添加到队列
  * 3 直到队列为空
  * */
  bfs(s) {
    const queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
      const v = queue.shift();
      console.log('graph.js: 77 -> bfs -> ', v);
      for (const w of this.adj[v]) {
        if (!this.marked[w]) {
          this.marked[w] = true;
          queue.push(w);
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