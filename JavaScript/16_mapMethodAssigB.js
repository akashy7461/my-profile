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
console.error("list of all employee name in new array");
const empname = array.map( (Employee) => {
    return Employee.emp_name;
 } )
 console.log(empname);

 console.error("list of department");
 const dap=array.map((Employee)=>{
    return Employee.emp_dept;
 })
 console.log(dap);

 console.error("list of employee id");
 const empid = array.map( (Employee) => {
    return Employee.emp_id;
 } )
 console.log(empid);

 console.error("list employee name working in TCS");
 let newarray=[];
 const workingTcs = array.map( (Employee) => {
    if(Employee.emp_company=="TCS")
    {
       return newarray.push(Employee.emp_name);
    }
    
 } )
 console.log(newarray);