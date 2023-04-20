sbiBank = {
    bankName: "SBI",
    location : "Pune",
    accountNumber :0987654321987,
    ifsc :"SBIN0000432",
    rateOfInterest : 0.8
}
axisBank = {
    bankName: "Axis Bank",
    location : "Pune",
    accountNumber :0123456701232,
    ifsc :"UTIB0000054",
    rateOfInterest : 0.3
}
hdfcBank = {
    bankName: "HDFC Bank",
    location : "Pune",
    accountNumber :3456255943298,
    ifsc :"HDFC0000692",
    rateOfInterest : 0.12
}
yesBank = {
    bankName: "YES Bank",
    location : "Pune",
    accountNumber :5436645547869,
    ifsc :"YESB0000719",
    rateOfInterest : 0.6
}
function print(){
    console.error("-------------------------------------------------------------------------------------------------------------------------");
}
show = function(bank)
{
    console.log("Bank Details: ", bank);
}

print();
show(sbiBank);
print();
show(axisBank);
print();
show(hdfcBank);
print();
show(yesBank);
console.error("-------------------------------------------------------------------------------------------------------------------------");