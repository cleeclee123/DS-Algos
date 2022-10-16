import { Node } from "./Node";
import { LinkedList } from "./LinkedList";

/**
 * takes in the head of the current linked list
 * reverses the current list, updates the head
 * @param head 
 */
export function reverseList(list: LinkedList): void {
  let prev: Node = null;
  let next: Node = null;
  let current: Node = list.head_;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  list.head_ = prev;
}

export function stringify(list: LinkedList): string {
  let str: string;
  let current: Node = list.head_;
  while (current != null) {
    str += String(current.value);
    current = current.next;
  } 
  return str.substring(9);
}

// Leetcode #2
export function addTwoNumbers(list1: LinkedList, list2: LinkedList): LinkedList {
  reverseList(list1);
  reverseList(list2);
  let arr = String(parseInt(stringify(list1)) + parseInt(stringify(list2))).split("");
  const list: LinkedList = new LinkedList();
  arr.forEach((element) => {
    list.insertBack(parseInt(element));
  });
  reverseList(list);
  return list;
}

export function getSum(list: LinkedList): number {
  let current: Node = list.head_;
  let sum = 0;
  while (current != null) {
    sum += current.value;
    current = current.next;
  }
  return sum;
}

// merges second linked list to the first linked list
export function merge(list1: LinkedList, list2: LinkedList): void {
  let current: Node = list2.head_;
  while (current != null) {
    list1.insertBack(current.value);
    current = current.next;
  }
}

// sorts linked list in place 
export function sort(list: LinkedList): LinkedList {
  let arr = [];
  let current = list.head_;
  while (current != null) {
    arr.push(current.value);
    current = current.next;
  }
  arr.sort((a,b) => a-b)
  let sortedList: LinkedList = new LinkedList();
  arr.forEach((e) => {
    sortedList.insertBack(e);
  });
  return sortedList;
}
