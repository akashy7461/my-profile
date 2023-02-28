function checkLeapYear(year) {
    if(year == null || typeof year== String || isNaN(year) || year==undefined)
    {
        console.log(`Enter valid year ${year}`);
        return 0;
    }
    if (((0 == year % 4) && (0 != year % 100) )|| (0 == year % 400)) {
        console.log(year + ' is a leap year');
    }else{
        console.log(year + ' is not a leap year');
    }
   
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(undefined);
checkLeapYear("twenty twenty");
checkLeapYear(null);
checkLeapYear(NaN);
checkLeapYear(1750);
