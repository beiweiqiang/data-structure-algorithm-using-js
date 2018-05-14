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
          // console.log('graph.js: 34 -> showGraph -> ', `${i} -> ${obj}`);
        }
      }
    }
  }

  /*
  * 深度优先搜索
  * 访问一个没有访问过的顶点, 将它标记为已访问,
  * 如果这个顶点的邻接表中有其他顶点是未访问过的, 递归进行访问
  *
  * 深度优先搜索不是在查找特定路径, 而是通过搜索来查看图中有哪些路径可选
  * 深度优先搜索是从当前顶点开始, 递归的先访问完一条路径, 然后从头开始再访问另一条路径...
  * */
  dfs(v) {
    // 标志该顶点已经 visited
    this.marked[v] = true;
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
  *
  * 广度优先搜索是从当前顶点开始, 一层一层往外访问
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
  * 求最短路径 (利用广度优先搜索)
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

  /*
  * 拓扑排序 (优先级约束调度)
  * 与深度优先搜索类似, 不过拓扑排序会将邻接表中的顶点先访问完, 才将当前顶点入队列
  *
  * (个人感觉和深度优先搜索一样)
  * */
  topSort() {
    const stack = [];
    const visited = [];

    for (let i = 0; i < this.vertices; i++) {
      visited[i] = false;
    }

    for (let i = 0; i < visited.length; i++) {
      if (visited[i] === false) {
        this.topSortHelper(i, visited, stack);
      }
    }

    for (let i = 0; i < stack.length; i++) {
      if (stack[i] !== undefined && stack[i] !== false) {
        console.log('graph.js: 164 -> topSort -> ', stack[i]);
      }
    }
  }

  /*
  * 1 将当前顶点标记为已访问
  * 2 递归访问当前顶点邻接表中的每个顶点, 继续 步骤1
  * */
  topSortHelper(v, visited, stack) {
    // 设置为已访问
    visited[v] = true;

    // 对当前顶点邻接表中的所有顶点进行访问
    for (const w of this.adj[v]) {
      if (visited[w] === false) {
        this.topSortHelper(visited[w], visited, stack);
      }
    }

    // 如果当前顶点的邻接表中的所有顶点都访问过了, 将该顶点入栈
    stack.push(v);
  }
}


class Vertex {
  constructor(label) {
    this.label = label;
  }
}

module.exports = Graph;