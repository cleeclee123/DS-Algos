/**
 * Implementation of a Singly Linked List
 * Linked List Class
 */

import { Node } from "./Node";

interface ISearchObj {
  index?: number;
  exists?: boolean;
  node?: Node;
}

interface ILinkedList {
  head_?: Node;
  tail_?: Node;
  insertBack(newValue: any): void;
  insertFront(newValue: any): void;
  insertAt(newValue: any, index: number): void;
  deleteAt(index: number): void;
  search(data: any): ISearchObj;
  index(index: number): Node;
  getLength(): number;
  printList(): string;
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
    if (index > this.getLength() || index < 0) {
      throw "Invalid Index";
    }
    if (index === 0) {
      this.insertFront(newValue);
    } else if (index === this.getLength()) {
      this.insertBack(newValue);
    } else {
      let newNode: Node = new Node(newValue);
      let current: Node = this.index(index);
      let prev: Node = this.index(index - 1);

      newNode.next = current;
      prev.next = newNode;
    }
  }

  public deleteAt(index: number): void {
    if (index === 0) {
      let node: Node = this.head_;
      let temp: Node = node.next;
      node.next = temp.next;
      temp.next = null;
    } else {
      let node: Node = this.index(index - 1);
      let temp: Node = node.next;
      node.next = temp.next;
      temp.next = null;
    }
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

  public search(data: any): ISearchObj {
    let searchObj: ISearchObj = {};
    searchObj.index = 0;
    let current: Node = this.head_;
    while (current != null) {
      searchObj.index += 1;
      if (current.value === data) {
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

  public printList(): string {
    let list: string;
    let current: Node = this.head_;
    while (current != null && current != undefined) {
      if (current === this.tail_) {
        list += String(current.value);
      } else if (current.value !== undefined || current.value !== null) {
        list += String(current.value + " -> ");
      }
      current = current.next;
    }
    if (list === undefined) {
      return "Empty List";
    }
    return list.substring(9);
  }
}
