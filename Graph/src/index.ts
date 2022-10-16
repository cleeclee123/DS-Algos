import { Graph } from "./Graph";

function comparator(a: number, b: number) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function printGraph(graph: Graph<number>) {
  let keys = graph.nodes.keys();
  for (let i of keys) {
    let values = graph.nodes.get(i);
    console.log({"n": i, "al": values.adjacent.map(x => x.data)});
  }
}

const graph = new Graph(comparator);

const n1 = graph.addNode(1);
const n2 = graph.addNode(2);
const n3 = graph.addNode(3);
const n4 = graph.addNode(4);

graph.addEdge(n1.data, n2.data);
graph.addEdge(n1.data, n3.data);
graph.addEdge(n2.data, n4.data);
graph.addEdge(n3.data, n4.data);

console.log(printGraph(graph));