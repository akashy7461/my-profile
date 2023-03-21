const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((currentValue,index )=> {
    console.log(`Value: ${currentValue} Index:${index}`);
    
});

console.log("Positive Number:");
arrayNumbers.forEach((num) => {
    if(num>0)
    {
        console.log(`${num}`);
    }
    
});
const array=[];
arrayNumbers.forEach((num1) => {
    if(num1<0)
    {
        array.push(num1)
        
        
    }
   
});
console.log("Negative Number and Push into array:",array);

console.log("Find the Even number in array:");
arrayNumbers.forEach((numb) => {
    if(numb%2==0)
    {
        console.log(numb);
    }
});
console.log("Sum of all element in array");
let sum=0;
arrayNumbers.forEach((num2) => {
    sum=sum+num2;
     
});
console.log(sum);

console.log("Find the Even number index in array:");
arrayNumbers.forEach((num4,index) => {
    if(index%2==0)
    {
        console.log(num4);
    }
});
