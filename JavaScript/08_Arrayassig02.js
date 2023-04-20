const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
console.error(
  "--------------------------1st---------------------------------------"
);
console.log("Total length of element is:", arrayNumbers.length);
console.error(
  "--------------------------2st---------------------------------------"
);
console.log("First element:", arrayNumbers[0]);
const last = arrayNumbers.slice(arrayNumbers.length - 1);
console.log("Last element:", last);

console.error(
  "---------------------------3 nd------------------------------------"
);
let a = arrayNumbers.length - 3;
console.log("thirst last element:", arrayNumbers[a]);

console.error("-------------------4th------------------------------------");
let c = 0;
let i = 0;
console.log("Even number");
while (i <= arrayNumbers.length) {
  const ele = arrayNumbers[i];
  if (ele % 2 == 0) {
    console.log(ele);
    c += ele;
  }
  i++;
}

console.error("-------------------5th------------------------------------");
let s = 0;
let j = 0;
console.log("Odd Number");
while (j < arrayNumbers.length) {
  const ele = arrayNumbers[j];
  if (ele % 2 !== 0) {
    console.log(ele);
    s += ele;
  }
  j++;
}
console.error("-------------------6th------------------------------------");
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 == 0) {
    sum += arrayNumbers[i];
  }
}
console.log("sum of even number", sum);
console.error("-------------------7th------------------------------------");
let oddsum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 !== 0) {
    oddsum += arrayNumbers[i];
  }
}
console.log("Sum of Odd Number:", oddsum);
console.error("-------------------8th------------------------------------");
let all = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
  all += arrayNumbers[i];
}
console.log("All element of array sum:", all);
console.error("-------------------9th------------------------------------");
console.log("the number multiple by 5");
for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 5 == 0) {
    console.log(arrayNumbers[i]);
  }
}
console.error("-------------------10th------------------------------------");
let find = arrayNumbers.includes(115)
  ? `Number is avilable 155`
  : `number is not avilable 155`;
console.log(find);
console.error("-------------------11th------------------------------------");
let finds = arrayNumbers.includes(23)
  ? `Number is avilable 23`
  : `number is not avilable 23`;
console.log(finds);
console.error("-------------------12th------------------------------------");
let insert = arrayNumbers.splice(3, 0, 55, 66);
console.log("Insert number 55,66 before index 3",arrayNumbers);
console.error("-------------------13th------------------------------------");
let delet = arrayNumbers.splice(4, 3);
console.log("Delete 3 element starting from index 4",arrayNumbers);
