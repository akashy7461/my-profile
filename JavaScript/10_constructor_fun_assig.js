function Bank(bankName,location,ifscCode,branchCode)
{
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    this.show=function(){
        console.log(`Bank Details:${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
    }
}
const yesBank=new Bank("yesBank","Pune","yes021343","YES0123");
yesBank.show();
const sbiBank=new Bank("SBIBank","Mumbai","sbi089343","SBI0873");
sbiBank.show();
const mahBank=new Bank("MAHBank","Solapur","mah026413","MAH6223");
mahBank.show();
const axisBank=new Bank("AXISBank","Sangli","axis385043","AXIS3286");
axisBank.show();
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
console.error("--------------------------------------------------------------------------");
console.log(`open Time:${sbiBank.openTime} and Close Time:${sbiBank.closeTime} of object sbiBank`);
console.log(`open Time:${axisBank.openTime} and Close Time:${axisBank.closeTime} of object axisBank`);
console.error("---------------------------------------------------------------------------");
console.log(`Bank Name:${yesBank.bankName} Barch Code:${yesBank.branchCode} and open Time:${yesBank.openTime} of yesbank`);