const arrayNums=[20,3,4,56,90,400,49]
arrayNums.push(55,66);
const clonedArray=[...arrayNums];

console.error("--------------------------1st--------------");
console.log("perform shallow clone on arrayNum,update cloned array with value push-55,66");
console.log(`Original arrayNums: ${arrayNums}`);
console.log(`Cloned array: ${clonedArray}`);

console.error("-------------------------2nd-------------------");
console.log("perform deep clone using spread operator ,update original array with values 10,25 last position");
arrayNums.push(10,25);
const deepCloned=JSON.stringify(clonedArray);

console.log("Original Array:",arrayNums);
console.log("Deep cloned arrayNums:",deepCloned);

console.error("------------------------3rd------------------------");
console.error("given other arrayEven Merge or concat arrayNum");
const arrayEven=[2,30,14,8];
const arrayEvenMarge=[...arrayEven];

const con=arrayNums.concat(arrayEvenMarge);
console.log("Merge Array:",con);

console.error("------------4th employee_info------");
const employee_info={
 emp_id:27,
 emp_name:"John Doe",
 
 salary:{
    july_month:"40,0000 INR",
    aug_month:"50 0000 INR",
    jun_month:"65,0000 INR"
 },
 address:{
    locality:{
        colony:"OM Vrindavan Society",
        street:"Kanch Pokli,43102",
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobile:["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
 }
};
console.error("log in emp details");
console.log(`Address: ${employee_info.address.locality.colony
},street: ${employee_info.address.locality.street
},city: ${employee_info.address.locality.city
},state: ${employee_info.address.locality.state
}, country: ${employee_info.address.locality.country
}`);
console.log(`Mobile Number: ${employee_info.address
.mobile}`);

console.error("----------------5th-----------");
console.error("deep copy using json.stringfy");
const cloned_emp_info=JSON.parse(JSON.stringify(employee_info));
//update properties on cloned and original object
cloned_emp_info.salary.july_month="80k";
cloned_emp_info.address.locality.country="United Kingdom";

console.log(`Orignal object salary of july_month:${employee_info.salary.july_month}`);
console.log(`cloned object salary of july_month:${cloned_emp_info.salary.july_month}`);
console.error("-----------------------------------------");
console.log(`Orignal object country :${employee_info.address.locality.country}`);
console.log(`cloned object country :${cloned_emp_info.address.locality.country}`);