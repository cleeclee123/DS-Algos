/**
 * Implementation of a Binary tree
 * TreeNode Class
 */

export default class TreeNode {
  data: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
