import { LinkedList } from "./LinkedList";
 
const list: LinkedList = new LinkedList();

list.insertBack(1);
list.insertBack(2);
list.insertBack(3);
list.insertBack(4);
list.insertBack(5);

let length = list.getLength();
console.log(length);