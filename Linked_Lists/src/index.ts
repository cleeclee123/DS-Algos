import { LinkedList } from "./LinkedList";
import { reverseList, addTwoNumbers, getSum, stringify, merge } from "./functions";
 
const list0: LinkedList = new LinkedList();
const list1: LinkedList = new LinkedList();

list0.insertBack(2);
list0.insertBack(5);
list0.insertBack(1);

list1.insertBack(6);
list1.insertBack(3);
list1.insertBack(4);


// merge(list0, list1);
let merged = list0.printList();

console.log(merged);

// list1.insertBack(5);
// list1.insertBack(6);
// list1.insertBack(4);

// let sum = addTwoNumbers(list0, list1);

