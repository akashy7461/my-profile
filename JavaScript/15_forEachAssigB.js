class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

array.forEach(Employee => {
    if(Employee.emp_company=="TCS")
    {
        console.log(`Employee Name:${Employee.emp_name} Employee Company Name:${Employee. emp_company}`);
    }
    
});
console.error("Find emp salary is 50000>= and all emp details ");
array.forEach(Employee => {
   if(Employee.emp_salary>=50000) 
   {
    console.log(`Employee ID:${Employee.emp_id}, Employee Name:${Employee.emp_name}, DEPT Name:${Employee.emp_dept}, Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
   }
});

console.error("Find out all emp salary sum ");
let sum=0;
array.forEach(Employee => {
  
    sum=sum+Employee.emp_salary;

});
console.log(sum);

console.error("Find Average salary ");
let avg=0;
let s=0;
let len=array.length;
array.forEach((Employee,index) => {
    s=Employee.emp_salary+s;
  avg=s/len;

});
console.log(avg);

console.error("Find the IT or HR dept empl salary is >=75000 ");

array.forEach((Employee) => {
   if(Employee.emp_salary>=75000)
   {
   if( Employee.emp_dept=="IT" || Employee.emp_dept=="HR")
{
    console.log(`Employee ID:${Employee.emp_id}, Employee Name:${Employee.emp_name}, DEPT Name:${Employee.emp_dept}, Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
}
   }
});
