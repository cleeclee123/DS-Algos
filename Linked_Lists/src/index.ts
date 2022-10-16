import { LinkedList } from "./LinkedList";
import { reverseList, addTwoNumbers, getSum, stringify, merge, sort } from "./functions";
 
const list0: LinkedList = new LinkedList();
const list1: LinkedList = new LinkedList();

list0.insertBack(2);
list0.insertBack(5);
list0.insertBack(1);

list1.insertBack(6);
list1.insertBack(3);
list1.insertBack(4);

let sorted = sort(list0);

console.log(sorted.printList());

// list1.insertBack(5);
// list1.insertBack(6);
// list1.insertBack(4);

// let sum = addTwoNumbers(list0, list1);

