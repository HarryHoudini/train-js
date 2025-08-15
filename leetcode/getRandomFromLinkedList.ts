/**
 * Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 */

class ListNode {
val: number
next: ListNode | null
constructor(val?: number, next?: ListNode | null) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}
}

class Solution {
    head: ListNode;
    listArr:Array<ListNode> = [];

    constructor(head: ListNode | null) {
        this.head = head;
    }

    getRandom(): number {
        let reservoir = this.head.val;
        let current = this.head.next;
        let i = 1;

        while (current) {
            i++
            if (Math.random() < 1 / i) {
                reservoir = current.val
            }
            current = current.next;
        }

        return reservoir;

    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
