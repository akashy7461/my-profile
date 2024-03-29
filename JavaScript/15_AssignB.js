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

console.error("Employee Working in 'TCS' only ");
for (const Employee of array) {
    if(Employee.emp_company=="TCS")
    {
        console.log(`Copany Name:${Employee.emp_company}, Employee Name:${Employee.emp_name}`);
    }
    
}
console.error("Employee in finance Department only");
for (const Employee of array) {
    if(Employee.emp_dept=="Finance")
    {
        console.log(`Employee DEPT:${Employee.emp_dept}, Employee Name:${Employee.emp_name}`);
    }
    
}
console.error("Employee Name Start with Char'R'");
for (const Employee of array) {
    if(Employee.emp_name.startsWith("R"))
    {
        console.log(`Employee ID:${Employee.emp_id}, Employee Name:${Employee.emp_name}, DEPT Name:${Employee.emp_dept}, Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
    }
    
}
console.error("Employee salary is greater than 75000");
for (const Employee of array) {
    if(Employee.emp_salary>75000)
    {
        console.log(`Employee Name:${Employee.emp_name}, Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
    }
    
}

console.error("Employee salary is greater than or equal 50000 and 'IT' department");
for (const Employee of array) {
    if(Employee.emp_salary>=50000 && Employee.emp_dept=="IT")
    {
        console.log(`Employee ID:${Employee.emp_id}, Employee Name:${Employee.emp_name}, DEPT Name:${Employee.emp_dept}, Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
    }
    
}

console.error("Employee from company name is 'Infy' details");
for (const Employee of array) {
    if(Employee.emp_company=="Infy")
    {
        console.log(`Employee ID:${Employee.emp_id}, Employee Name:${Employee.emp_name}, DEPT Name:${Employee.emp_dept}, Salary:${Employee.emp_salary}, Company Name:${Employee.emp_company}`);
    }
    
}