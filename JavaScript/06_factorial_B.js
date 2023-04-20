 function factorialofWordSCount(arg)
 {
    if(!arg||typeof arg !=="string")
        {
            
            return 'please Enter vaild String: '
        }
    var st=arg.split(" ");
    var str=st.length;
    console.log(`Total word in string:`,str);
        
    let numb=1;
    for(let i=str;i>0;i--)
    {
        numb*=i;
             
    }
    return numb;
 }
 console.log("Factorial of String word:",factorialofWordSCount("Revision is the mother of success"));
 console.log("Factorial of string word:",factorialofWordSCount("We never fail, we always learn"));
 console.log("Factorial of string word:",factorialofWordSCount(null));
 console.log("Factorial of string word:",factorialofWordSCount(""));
 console.log("Factorial of string word:",factorialofWordSCount("Akash Shivaji Yadav"));
 console.log("Factorial of string word:",factorialofWordSCount(undefined));
 console.log("Factorial of string word ",factorialofWordSCount(NaN));
