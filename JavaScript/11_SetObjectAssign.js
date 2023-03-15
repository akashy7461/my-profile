class Bank{
    constructor(bankName,location,account_no,ifsc,interest_rate)
    {
        this.bankName=bankName;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }

}
console.error("----------------------------Create objects of these bank---------------------");
const axis_bank=new Bank("AXIS BANK","Pune","23311256789","AXIS000342",12.4);
console.log(axis_bank);
const sbi_bank=new Bank("SBI BANK","Mumbai","90786543658","SBI000765",9.4);
console.log(sbi_bank);
const icic_bank=new Bank("ICICI BANK","Solapur","48579586512","ICICI00654",16.4);
console.log(icic_bank);
const kotak_bank=new Bank("KOTAK BANK","sangli","1263254535261","KOTAK00322",5.4);
console.log(kotak_bank);
const hdfc_bank=new Bank("HDFC BANK","sangola","65263541545","HDFC0980",11.4);
console.log(hdfc_bank);
const panjab_bank=new Bank("PANJAB BANK","panjab","54265387150","PANJAB0765",8.4);
console.log(panjab_bank);


const addobject= new Set();
addobject.add(axis_bank);
addobject.add(sbi_bank);
addobject.add(icic_bank);
addobject.add(kotak_bank);
addobject.add(hdfc_bank);
addobject.add(panjab_bank);

console.error("---------------------------add all object element in a set--------------------");
console.log(addobject);
console.error("-----------Traverse Set Using For of loop log in only bankName and location----------");
for (const element of addobject) {
    console.log(`Bank Name: ${element.bankName}, Bank location:${element.location}`);
    
}
