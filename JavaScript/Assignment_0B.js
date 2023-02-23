function maleMarriageEligibility(gender,age,boyName){
    var res=(gender="Male" && age>=21) ? `Hey ${boyName} you are Eligible for Marriage`:`Not Eligible for Marriage ${boyName}`;
    return res;
}
var res=maleMarriageEligibility("Male",25,"Billgates");
console.log(res);
var res=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(res);
console.log("----------------------------------------------------------------");
function femaleMarriageEligibility(gender,age,girlName){
    var result=(gender="Female" && age>=18) ? `Hey ${girlName} you are Eligible for Marriage`:`Not Eligible for Marriage ${girlName}`;
    return result;
}
var result=femaleMarriageEligibility("female",16,"Jenifer");
console.log(result);
var result=femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(result);