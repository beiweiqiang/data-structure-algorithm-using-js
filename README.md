# 数据结构与算法, JavaScript版

## 关于排序速度

同样跑 200000 数据

```
bubble speed: 624
selection speed: 338
insertion speed: 95
定步长 shell speed: 3561
可变步长 shell speed: 36
merge speed: 253
quick speed: 122
js sort speed: 108
```

// TODO

## 勘误 (个人认为)


98页: key 忘记赋值

```javascript
put(key, data) {
  let pos = this.betterHash(key);
  /*
  * 开链法:
  * */
  let index = 0;
  if (!this.table[pos][index]) {
    // 使用了两个连续的单元格, 第一个存key, 第二个存data
    this.table[pos][index] = key;
    this.table[pos][index + 1] = data;
  } else {
    while (this.table[pos][index]) {
      ++index;
    }
    this.table[pos][index] = key;
    this.table[pos][index + 1] = data;
  }
}
```


100页: 循环中的if条件内, 应该是 `this.table[i]` 不是 `this.table[hash]`, i 才会递增

```javascript
let hash = -1;
hash = this.betterHash(key);
if (hash > -1) {
  for (let i = hash; this.table[hash]; i++) {
    if (this.table[i] === key) {
      return this.values[i];
    }
  }
}
```


106页: 数组方法用错

应该使用 for..of, 而不是 for..in

```javascript
/*
* 子集, 检查该集合是否是传入的 set 的子集
* */
subset(set) {
  if (this.size() > set.size()) {
    return false;
  }
  for(const item of this.dataStore) {
    if (!set.contains(item)) {
      return false;
    }
  }
  return true;
}
```


134页: 广度优先搜索, 遍历数组元素, 应该用 for..of
```javascript
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
```


157页:
```javascript
  /*
  * 动态计算间隔序列的希尔排序
  * */
  shellSort1() {
    const N = this.dataStore.length;
    let h = 1;
    while (h < N / 3) {
      h = 3 * h + 1;
    }
    while (h > 1) {
      for (let i = h; i < N; i++) {
        const tmp = this.dataStore[i];
        let j = i;
        for (; j >= h && this.dataStore[j - h] > tmp; j -= h) {
          this.dataStore[j] = this.dataStore[j - h];
        }
        this.dataStore[j] = tmp;
      }
      h = (h - 1) / 3;
    }
  }
```