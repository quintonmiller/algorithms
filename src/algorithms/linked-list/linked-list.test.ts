import {LinkedList} from "./LinkedList";

describe('Linked Lists', () => {

    describe('LinkedList.length', () => {

        it('should work with empty Linked List', () => {

            const linkedList = new LinkedList();

            expect(linkedList.length).toEqual(0);
        });

        it('should work with one element', () => {

            const linkedList = new LinkedList();
            linkedList.append(1);

            expect(linkedList.length).toEqual(1);
        });

        it('should work with many elements (appended)', () => {

            const numElements = 150;
            const linkedList = new LinkedList();

            for (let i = 0; i < numElements; i++) {
                linkedList.append(i);
            }

            expect(linkedList.length).toEqual(numElements);
        });

        it('should work with many elements (prepended)', () => {

            const numElements = 150;
            const linkedList = new LinkedList();

            for (let i = 0; i < numElements; i++) {
                linkedList.prepend(i);
            }

            expect(linkedList.length).toEqual(numElements);
        });
    });

    describe('LinkedList.delete', () => {

        it('should return null if element is not in linked list (empty)', () => {

            const linkedList = new LinkedList();

            expect(linkedList.delete(null)).toEqual(null);
            expect(linkedList.delete(undefined)).toEqual(null);
            expect(linkedList.delete(0)).toEqual(null);
        });

        it('should return null if element is not in linked list (one element)', () => {

            const linkedList = new LinkedList();
            linkedList.append(1);

            expect(linkedList.delete(null)).toEqual(null);
            expect(linkedList.delete(undefined)).toEqual(null);
            expect(linkedList.delete(0)).toEqual(null);
        });

        it('should return null if element is not in linked list (many elements)', () => {

            const numElements = 100;
            const linkedList = new LinkedList();

            for (let i = 0; i < numElements; i++) {
                linkedList.prepend(i);
            }

            expect(linkedList.delete(null)).toEqual(null);
            expect(linkedList.delete(undefined)).toEqual(null);
            expect(linkedList.delete(numElements + 1)).toEqual(null);
        });

        it('should delete head correctly (1 element)', () => {

            const linkedList = new LinkedList();
            const newNode = linkedList.append(1);

            expect(linkedList.delete(1)).toEqual(newNode);
            expect(linkedList.length).toEqual(0);
            expect(linkedList.contains(1)).toEqual(false);
            expect(linkedList.toArray()).toEqual([]);
        });

        it('should delete head correctly (multiple elements)', () => {

            const linkedList = new LinkedList();
            const newNode = linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);

            expect(linkedList.delete(1)).toEqual(newNode);
            expect(linkedList.length).toEqual(2);
            expect(linkedList.contains(1)).toEqual(false);
            expect(linkedList.toArray()).toEqual([2, 3]);
        });
    });
});
