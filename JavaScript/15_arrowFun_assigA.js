let arrow = () => {
    console.log("Good Morning, Today is Monday");
}
arrow();

let multiplicaton=(num1,num2,num3=1)=>{
const result=num1*num2*num3;
console.log(result);
}
console.error("Multiplication of 3 arg");
multiplicaton(5,5,2);
console.error("Invoke the same function for value 10,4 and 3rd arg is as 1");
multiplicaton(10,4);

let addition=(arg1,agr2,arg3,arg4,arg5)=>{
return arg1+agr2+arg3+arg4+arg5;
}
console.error("addition of 5 arg with arg and with return value");
let res=addition(100,100,200,349,756);
console.log(res);
console.error("concat of 5 string  with arg and with return value");
let reults=addition("I am"," learning"," ES6"," features"," in depth");
console.log(reults);
