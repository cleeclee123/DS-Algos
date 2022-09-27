import { LinkedList } from "./LinkedList";
import { reverseList, addTwoNumbers, getSum, stringify } from "./functions";
 
const list0: LinkedList = new LinkedList();
const list1: LinkedList = new LinkedList();

list0.insertBack(2);
list0.insertBack(4);
list0.insertBack(3);
list0.deleteFront();

console.log(list0.printList());


// list1.insertBack(5);
// list1.insertBack(6);
// list1.insertBack(4);

// let sum = addTwoNumbers(list0, list1);

