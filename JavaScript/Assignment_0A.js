function greaterNumber(value,value1){

    return value>value1 ? value :value1;
}

var result=greaterNumber(10,-10);
console.log("Number 10 and -10:",` gratear no: ${result}`);
var result=greaterNumber(800,899);
console.log("Number 800 and 899:",` gratear no: ${result}`);

console.log("-------------------------------------");
function isEvenOrOddNum(num1){
var number=num1%2==0 ? `True`:`False`;
return number;

}
var number=isEvenOrOddNum(29);
console.log(" given number is 29: ",number);

var number=isEvenOrOddNum(44);
console.log(" given number is 44: ",number);

var number=isEvenOrOddNum(0);
console.log(" given number is 0: ",number);

var number=isEvenOrOddNum(101);
console.log(" given number is 101: ",number);

console.log("----------------------------");
function wordLength(word){
var wordfuction=word.length;
var re=wordfuction%2==0 ? "EVEN" : "ODD";
return re;

}
var re=wordLength("javaScript");
console.log(`Word "javaScript" has length: ${re}`);

var re=wordLength("Developer");
console.log(`Word "Developer" has length: ${re}`);

var re=wordLength("Google");
console.log(`Word "Google" has length: ${re}`);