'use strict';

const LL = require('../linked-list.js');
describe('Linked List', () => {
  it('constructor', () => {
    const list = new LL();
    expect(list.head).toBeNull();
  });
  it('insert', () => {
    const ll = new LL();
    const initValue = 'First one';
    ll.insert(initValue);
    expect(ll.head.value).toEqual(initValue);
    expect(ll.head.next).toBeNull();

    const newValue = 'new one';
    ll.insert(newValue);
    expect(ll.head.value).toEqual(newValue);
    expect(ll.head.next.value).toEqual(initValue);
    expect(ll.head.next.next).toBeNull();

  });
  it('Can successfully insert multiple nodes at the beginning of the linked list',()=>{
    let first = 'this';
    let second = 'is';
    let third = 'my';
    let fourth = 'course';
    let linkList = new LL();
    linkList.insert(fourth);
    linkList.insert(third);
    linkList.insert(second);
    linkList.insert(first);
    expect(linkList.head.value).toEqual(first);
    expect(linkList.head.next.value).toEqual(second);
    expect(linkList.head.next.next.value).toEqual(third);
    expect(linkList.head.next.next.next.value).toEqual(fourth);
    expect(linkList.head.next.next.next.next).toBeNull();
  });

  it('includes', () => {
    const llist = new LL();
    const nodeVal = 'new one';
    const anotherVal= '7';

    llist.insert(nodeVal);
    llist.insert(anotherVal);
    expect(llist.includes(nodeVal)).toBeTruthy();
    expect(llist.includes(anotherVal)).toBeTruthy();
    expect(llist.includes('first')).toBeFalsy();
    expect(llist.includes('last')).toBeFalsy();

        
  });

  it('toSrting', () => {
    const llist = new LL();
    const nodeVal = 'Reham';
    const anotherVal= 'Omar';
    const anotherValue= 'AL-Sobh';


    llist.insert(anotherValue);
    llist.insert(anotherVal);
    llist.insert(nodeVal);

    expect(llist.toSrting()).toEqual('Reham Omar AL-Sobh');
   
  });

 
});