# Singly Linked List
Represent how linked list  work and linked to each other as a object chain

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Approach & Efficiency
use constructor , class and  while loop

### big O 

- insert : space O(1) , time O(1)
- includes :  space O(n) , time O(1)
- to string :  space O(n) , time O(1)
- append :  space O(n) , time O(1)
- insertBefore:  space O(n) , time O(1)
- insertAfter :  space O(n) , time O(1)


## API
- insert method : takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- includes method : takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- toString method : takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
- append :adds a new node with the given value to the end of the list
- insertBefore : add a new node with the given newValue immediately before the first value node
- insertAfter : add a new node with the given newValue immediately after the first value node


## white board lab 6
![whiteboard image ](../../assest/ll-insertion.jpg)

# white board lab 5
![whiteboard image ](../../assest/ll.jpg)

