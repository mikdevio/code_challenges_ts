// 002_add_two_numbers

/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

/* Definition for singly-linked list. */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  }
};

export class LinkedList implements Iterable<number> {
  public head: ListNode | null = null;

  constructor(head?: ListNode | null) {
    this.head = head || null;
  }

  public* [Symbol.iterator](): Iterator<number> {
    let current = this.head;

    while (current !== null) {
      yield current.val;
      current = current.next;
    }
  }

  // public* reverseIterator(): Generator<number> {
  //   const stack: number[] = [];
  //   let current = this.head;
  //   while(current !== null) { 
  //     stack.push(current.val); 
  //     current = current.next;
  //   }
  //   while(stack.length > 0) { yield stack.pop()!; }
  // }

  public fromArray(array: number[]): LinkedList {
    if(array.length === 0) {
      this.head = null;
      return this;
    }

    this.head = new ListNode(array[0]);

    let tail = this.head;

    for(let i=1; i < array.length; i++) {
      tail.next = new ListNode(array[i]);
      tail = tail.next;
    }

    return this;
  }

  // public addReverse(otherList: LinkedList): LinkedList {
  //   const iter1 = this.reverseIterator();
  //   const iter2 = otherList.reverseIterator();
  //
  //   const resultDigits: number[] = [];
  //   let carry = 0;
  //
  //   let next1 = iter1.next();
  //   let next2 = iter2.next();
  //
  //   while(!next1.done || !next2.done || carry > 0) {
  //     const val1 = !next1.done ? next1.value: 0;
  //     const val2 = !next2.done ? next2.value: 0;
  //
  //     const totalSum = val1 + val2 + carry;
  //
  //     carry = Math.floor(totalSum/10);
  //     const digit = totalSum % 10;
  //
  //     if(!next1.done) next1 = iter.next();
  //     if(!next2.done) next2 = iter2.next();
  //
  //   }
  //
  //   return new LinkedList().fromArray(resultDigits.reverse());
  //
  // }

  public add(otherList: LinkedList): LinkedList {
    let l1 = this.head;
    let l2 = otherList.head;

    let dummyHead = new ListNode(0);
    let currentResult = dummyHead;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0){
      const val1 = l1 !== null ? l1.val : 0;
      const val2 = l2 !== null ? l2.val : 0;

      const totalSum = val1 + val2 + carry;

      carry = Math.floor(totalSum/10);
      const digit = totalSum % 10;

      currentResult.next = new ListNode(digit);
      currentResult = currentResult.next;

      if(l1 !== null) l1=l1.next;
      if(l2 !== null) l2=l2.next;
    }

    return new LinkedList(dummyHead.next);
  }

  public toArray(): number[] {
    const array: number[] = [];
    let current = this.head;

    while(current !== null) {
      array.push(current.val);
      current = current.next;
    }

    return array;
  }

}

export const addTwoNumbers = (l1: LinkedList, l2: LinkedList): number[] | null => {
  return l1?.add(l2).toArray();
}
