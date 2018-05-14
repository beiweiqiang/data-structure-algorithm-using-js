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

    // 顶点是否被访问过
    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
      this.marked[i] = false;
    }

    // 存储, 从一个顶点到下一个顶点的所有边
    /*
    * 比如:
    * e = [undefined, 0, 0, undefined, 2]
    * e[1] = 0, e[2] = 0, e[4] = 2
    * 表示路径有, 0 -> 1, 0 -> 2, 2 -> 4
    *
    * */
    this.edgeTo = [];
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
      for (const w of this.adj[v]) {
        if (!this.marked[w]) {
          this.marked[w] = true;

          /*
          * this.edgeTo[目标顶点] = 起始顶点;
          * 不会被覆盖, 每个顶点只会被 visited 一次,
          * 这个数组记录了如果要到达目标顶点, 需要从哪个上一个顶点出发
          *
          * eg:
          * [0: undefined, 1: 0, 2: 0, 3: 2, 4: 2]
          * 可以看出,
          * 从 0 开始, 可以去到 1, 2
          * 从 2 开始, 可以去到 3, 4
          * */
          this.edgeTo[w] = v;
          queue.push(w);
        }
      }
    }
  }

  /*
  * 从顶点 0 开始, 到达顶点 v 的路径
  * 求最短路径
  * */
  pathTo(v) {
    const source = 0;
    if (!this.hasPathTo(v)) {
      return;
    }
    const path = [];
    /*
    * for 循环中
    * 设 i 为目标顶点
    * i 不为起始顶点, 则不停止
    *
    * i = this.edgeTo[i] 的意思是:
    * 把 i 作为目标顶点, 它的起始访问顶点是什么
    * */
    for (let i = v; i !== source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(source);
    return path;
  }

  /*
  * 传入目标顶点, 判断目标顶点是否被遍历过,
  * 如果没有被遍历过, 证明从 0 开始, 无法到达目标顶点
  * */
  hasPathTo(v) {
    return this.marked[v];
  }
}


class Vertex {
  constructor(label) {
    this.label = label;
  }
}

module.exports = Graph;