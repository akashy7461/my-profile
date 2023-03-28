const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.error("");

console.log("Reverse array:",arrayRollNumbers);

const sortarray=arrayRollNumbers.sort();
console.log(`sort array using sort() method:${sortarray}`);

const ascending=arrayRollNumbers.sort((a,b)=>{
    return a>b ? 1 :-1;
});
console.log(`ascending order array:${ascending.length}`);

const largestNumber = Math.max(...arrayRollNumbers);
console.log("largest number in array:",largestNumber);

const smallNumber = Math.min(...arrayRollNumbers);
console.log("smallest number in array:",smallNumber);

const uniqueRollNumbers = [...new Set(arrayRollNumbers)];
console.log("remove duplicate number:",uniqueRollNumbers);

