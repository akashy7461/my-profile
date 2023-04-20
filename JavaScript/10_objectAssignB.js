const bankSbi={
   bankName:"SBI Bank",
   accountNumber:878978972,
   ifscCode:"SBI234234",
   brachCode:"SBI2311" 
}

const bankLocation={
    street:"Pune",
    city:"hinjewadi",
    pincode:411057
}

const clonesbi=Object.assign({},bankSbi,bankLocation);
console.error("-----------------Merging object using object.assign method------------------");
console.log(clonesbi);
console.error("---------------Cloning the object using Deep Cloning i.e Spread Operator:------------------");
const Spreadoperater={...bankSbi,...bankLocation}
console.log(Spreadoperater);



const rateOfInterest={
    homeLoanInterest:6.4,
    personalLoanInterest:8.7,
    dueInterest:4.1
}
const allcloan={...bankSbi,...bankLocation,...rateOfInterest}
console.error("----------------Traversing with in object------------------------");
for (const [key,value]  of Object.entries(allcloan)) {
    console.log("  ",key,":  ",value)
 }