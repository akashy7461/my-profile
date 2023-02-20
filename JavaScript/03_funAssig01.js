console.log("--------1th question------");
function show() {
    console.log("Akash");
}
show();

function display() {
    console.log("Yadav");
}
display();


console.log("--------2th question------");

function personalDetails(firstName,lastName,collegeName){
console.log("First Name: ",firstName,"\n Last Name: ",lastName,"\n College Name: ",collegeName);
}
personalDetails("Akash","Yadav","Sangola College Sangola");

console.log("--------3th question------");

function swapValueDude(value1, value2){
    console.log("Before Swap: ",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap: ",value1,value2);
}
swapValueDude("Virat","Anushka");
swapValueDude(1000,2000);

console.log("--------4th question------");

function addThreeValues(n1,n2,n3){
    var add=n1+n2+n3;
    return add;
    
}
var addition=addThreeValues(10.23,600,40);
console.log(addition);
var additions=addThreeValues("Hello ","Good ","Morning");
console.log(additions);

