/**
 * Implementation of a Singly Linked List
 * Node Class
 */

export class Node {
  public value: any | null;
  public next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}