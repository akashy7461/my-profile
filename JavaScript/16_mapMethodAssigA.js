arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];
console.error("add 10 into each element");
const arrayNew = arrayNumber.map( (element) => {
    return element + 10;
 } )
 console.log(arrayNew);

console.error("square the each array element");
const arraysquare = arrayNumber.map( (element) => {
    return element*element;
 } )
console.log(arraysquare);
console.error("add the index value into each àrray element");
const arrayindexval = arrayNumber.map( (element,index) => {
    return element+index;
 } )
console.log(arrayindexval);


