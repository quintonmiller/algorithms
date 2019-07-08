import { LinkedListNode } from "./LinkedListNode";
import {CompareFunction} from "../../common/CompareFunction";
import {defaultCompareFunction} from "../../common/defaultCompareFunction";

export class LinkedList<T> {

    private head: LinkedListNode = null;
    private tail: LinkedListNode = null;

    constructor(private compareFn: CompareFunction<T> = defaultCompareFunction as any) {}

    public prepend(value: T): LinkedList<T> {

        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    public append(value: T): LinkedList<T> {

        const newNode = new LinkedListNode(value);

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    public delete(value: T): LinkedListNode {

        let tempNode: LinkedListNode = this.head;
        let deletedNode: LinkedListNode = null;

        // If deleting head => update head reference
        if (tempNode && this.compareFn(tempNode.val, value) === 0) {

            deletedNode = tempNode;
            this.head = tempNode.next;
        }

        // Loop through all nodes or until found node to delete
        while (tempNode && deletedNode === null) {

            // If deleting next node
            if (this.compareFn(tempNode.next.val, value) === 0) {

                deletedNode = tempNode.next;
                tempNode.next = tempNode.next.next;
            }

            tempNode = tempNode.next;
        }

        // Deleted tail => update tail reference
        if (deletedNode === this.tail) {
            this.tail = null;
        }

        return deletedNode;
    }

    public contains(value: T): boolean {

        let tempNode = this.head;

        while (tempNode) {

            if (this.compareFn(tempNode.val, value) === 0) {
                return true;
            }
            else {
                tempNode = tempNode.next;
            }
        }

        return false;
    }

    public toArray(): T[] {

        const arr = [];
        let tempNode = this.head;

        while (tempNode) {

            arr.push(tempNode.val);

            tempNode = tempNode.next;
        }

        return arr;
    }
}