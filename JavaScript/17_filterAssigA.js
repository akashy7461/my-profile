arrayNumber=[20,11,40,25,37,49,9,90,60,2,19];
console.error("find the number is greater than 50 using filter() method");
const greaterNumber=arrayNumber.filter((element)=>{
    return element>50
});
console.log(greaterNumber);
console.error("find the even number using filter() method");
const evenNumber=arrayNumber.filter((element)=>{
        return element%2==0;
});
console.log(evenNumber);
console.error("find the odd number using filter() method");
const oddNumber=arrayNumber.filter((element)=>{
    return element%2!==0;
});
console.log(oddNumber);
console.error("all number are multiple by 5 using filter() method");
const multiNumber=arrayNumber.filter((element)=>{
    return element%5==0;
});
console.log(multiNumber);
console.error("find out all number between 20 and 50 using filter() method");
const allnumber=arrayNumber.filter((element)=>{
    return element>20 && element<50;
});
console.log(allnumber);