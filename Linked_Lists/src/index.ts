import { LinkedList } from "./LinkedList";
 
const list0: LinkedList = new LinkedList();

list0.insertBack(1);
list0.insertBack(2);
list0.insertBack(4);
list0.insertFront(0);
list0.insertAt(3, 3);
list0.insertFront(0);
list0.deleteAt(0);

let data = list0.search(3);

console.log(list0.printList());
console.log(data);