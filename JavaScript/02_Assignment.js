var string="     Hey you are doing good, keep it up      ";

function stringHandsOn(){
    console.log("-------print the string as it is on console-- Step 1------");
    console.log(string);

    console.log("----------find the length of string---- Step 2---");
    var len=string.length;
    console.log(len);

    console.log("-----------Remove leading and trailing extra space-- Step 3--");
    var t1=string.trimStart();
    var t2=string.trimEnd();
    console.log("String leading:",t1,"length:",t1.length);
    console.log("String trailing:",t2,"length:",t2.length);
    var t=string.trim();
    console.log("all trim string:",t);

    console.log("-------total number of extra space remove---- Step 4----");
    var count=string.length-t.length;
    console.log(count);
    
    console.log("-------first and last character on ---- step 5----");
    var first=t.charAt(0);
    console.log("first char:",first);
    var last=t.charAt(t.length-1);
    console.log("last char: ",last);

    console.log("-------count word after step 3 ----- Step 6---");
    var cWord=t.split(" ");
    console.log(cWord.length);
    
    console.log("-------print good word index ----- Step 7---");
    var print=string.indexOf("good");
    console.log(print);

    console.log("------------ Step 8---");
    var sub=string.substring(22);
    console.log("Print substring starting index 22:",sub);

    var sl=string.slice(22);
    console.log("print slice String staring index 22:",sl);

    console.log("------------ Step 9---");
    var check=t.includes("up");
    console.log("check the word up:",check);

    console.log("------------ Step 10---");
    var check1=t.includes("up");
    console.log("check the word Hey:",check1);
    
}
stringHandsOn();


