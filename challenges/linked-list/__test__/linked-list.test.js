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
    const newValue = 'new one';
    ll.insert(newValue);
    expect(ll.head.value).toEqual(initValue);
    const final = 'last';
    expect(ll.head.next.value).toEqual(newValue);
    ll.insert(final);
    console.table(ll);
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


    llist.insert(nodeVal);
    llist.insert(anotherVal);
    llist.insert(anotherValue);

    expect(llist.toSrting()).toEqual('Reham Omar AL-Sobh');
   
  });

});