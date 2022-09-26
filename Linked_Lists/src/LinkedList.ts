/**
 * Implementation of a Singly Linked List
 * Linked List Class
 */

import { Node } from "./Node";

interface searchLLObj {
  index: number;
  exists: boolean;
  node: Node;
}

interface ILinkedList {
  insertBack(newValue: any): void;
  insertFront(newValue: any): void;
  insertAt(newValue: any, index: number): void;
  deleteAt(index: number): void;
  search(data: any): searchLLObj;
  index(index: number): Node;
  getLength(): number;
}

export class LinkedList implements ILinkedList {
  public head_: Node;
  public tail_: Node;

  // constructor with two init cases
  constructor(value?: any) {
    if (value === null || value === undefined) {
      this.head_ = null;
      this.tail_ = null;
      return;
    }
    const initNode: Node = new Node(value);
    this.head_ = initNode;
    this.tail_ = initNode;
  }

  public insertBack(newValue: any): void {
    let newNode: Node = new Node(newValue);
    if (this.head_ === null) {
      this.head_ = newNode;
    } else {
      this.tail_.next = newNode;
    }
    this.tail_ = newNode;
  }

  public insertFront(newValue: any): void {
    let newNode: Node = new Node(newValue);
    newNode.next = this.head_;
    this.head_ = newNode;
  }

  public insertAt(newValue: any, index: number): void {
    let node: Node = this.index(index);
    let newNode: Node = new Node(newValue);
    newNode.next = node;
    node = newNode;
  }
  
  public deleteAt(index: number): void {
    let node: Node = this.index(index - 1);
    let temp: Node = node.next;
    node.next = temp.next;
    temp.next = null;
  }

  public index(index: number): Node {
    return this.indexHelper(index, this.head_);
  }

  private indexHelper(index: number, node: Node): Node {
    if (index === 0 || node === null) {
      return node;
    }
    return this.indexHelper(index - 1, node.next);
  }

  public search(data: any): searchLLObj {
    let searchObj: searchLLObj;
    let current: Node = this.head_;
    while (current != null) {
      searchObj.index += 1;
      if ((current.value = data)) {
        searchObj.exists = true;
        searchObj.node = current;
        break;
      }
      current = current.next;
    }
    if (!searchObj.exists) {
      searchObj.index = -1;
    }
    return searchObj;
  }

  public getLength(): number {
    let length: number = 0;
    let current: Node = this.head_;
    while (current != null) {
      length += 1;
      current = current.next;
    }
    return length;
  }
}
