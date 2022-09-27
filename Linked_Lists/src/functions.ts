import { Node } from "./Node";
import { LinkedList } from "./LinkedList";

/**
 * takes in the head of the current linked list
 * reverses the current list, updates the head
 * @param head 
 */
export function reverseList(List: LinkedList): void {
  let prev: Node = null;
  let next: Node = null;
  let current: Node = List.head_;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  List.head_ = prev;
} 
