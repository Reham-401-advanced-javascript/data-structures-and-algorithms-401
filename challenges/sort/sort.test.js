const insertion = require('./sort.js');


describe(' Sort',()=>{
  it('Original array',()=>{
    let array=[9,8,1,66,4,46];
    expect(insertion(array)).toEqual([1,4,8,9,46,66]);
  });
  it('Reverse-sorted',()=>{
    let array=[100,90,80,70,60,50,40];
    expect(insertion(array)).toEqual( [40,50,60,70,80,90,100]);
  });
  it('Few uniques:',()=>{
    let array=[1,3,4,4,8,4,8];
    expect(insertion(array)).toEqual([ 1,3,4,4,4,8,8]);
  });
  it('Nearly-sorted',()=>{
    let array=[1,2,3,4,7,9,8];
    expect(insertion(array)).toEqual([1,2,3,4,7,8,9]);
  });
  
});