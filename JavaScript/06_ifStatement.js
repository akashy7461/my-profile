function number(num1)
{
    if(num1%2==0)
    {
        return "Even"
    }
    if(num1%2!=0)
    {
        return "Odd"
    }
}
var result=number(45);
console.log(`Number is 45:${result}`);
var result=number(70);
console.log(`Number is 70:${result}`);
var result=number(67);
console.log(`Number is 67:${result}`);
var result=number(98);
console.log(`Number is 98:${result}`);

console.log("--------------- 2nd question-------------------");

function voting(age)
{
    if(age>=18)
    {
        return "Eligible";
    }
    if(age<=18)
    {
        return "NOT Eligible";
    }
}
var res=voting(18);
console.log(`Person age 18 is ${res} for voting`);

var res=voting(20);
console.log(`Person age 20 is ${res} for voting `);

var res=voting(17);
console.log(`Person  age 17 is ${res} for voting`);

var res=voting(40);
console.log(`Person  age 17 is ${res} for voting`);

console.log("-------------------3rd Question---------------------------");

function findlength(str)
{
    var len=str.length;

    if(len>10)
    {
        return "JavaScript ES6 containes more than 10 character";
    }
    if(len<10)
    {
        return "JavaScript ES6 containes NOT more than 10 character";
    }
}
var s=findlength("JavaScript-ES6");
console.log(s);

console.log("----------------4th question---------------");

function findstring(strg){
    
    if(strg.indexOf("java")==0)
    {
        return "strat with java"
    }
    if(strg.indexOf("java")!=0)
    {
        return "Not strat with java"

    }
 
}
var r=findstring("javaScript language");
console.log(`Given String:${r}`);