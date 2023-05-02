//return third lowest and third highest in the array without using the index
let arr=[1,4,7,2,5,6,3,22,11,10];
console.log(arr.sort((a,b)=>a-b)); //mutates the array
console.log(arr);
console.log(arr.slice(2,3));
console.log(arr.slice(arr.length-3,arr.length-2));


