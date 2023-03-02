var vowel=function(str){
    var count=0;
    for(let i=0;i<=str.length;i++)
    {   
        var s=str.charAt(i);
        if(s=="a"||s=="e"||s=="i"||s=="o"||s=="u"||s=="A"||s=="E"||s=="I"||s=="O"||s=="U")
        {
            count+=1;
        }       
    }
    return count;
}
var result=vowel("JavaScript is the language Of Internet");
console.log(`total Vowels in String "JavaScript is the language Of Internet": ${result}`);
var result=vowel("I am Angular Developer");
console.log(`total Vowels in String "I am Angular Developer": ${result}`);
var result=vowel("Hard Work and commitment is the key of success");
console.log(`total Vowels in String "Hard Work and commitment is the key of success": ${result}`);

console.log("------------------------------------------------------------------------------------------------");
function lastWordCharsCount(str){
    var count="";
    for(let i=str.length-1;i>=0;i--)
    {
        var s=str.charAt(i);
        if(s==" ")
        {
          break;  
        }
        count=count+s; 
    }
    return count;
}
var result=lastWordCharsCount("JavaScript is the language Of Internet");
console.log(`last word length in String "JavaScript is the language Of Internet": ${result.length}`);
var result=lastWordCharsCount("I am Angular Developer");
console.log(`last word length in String "I am Angular Developer": ${result.length}`);
var result=lastWordCharsCount("Hard Work and commitment is the key of success");
console.log(`last word length in String "Hard Work and commitment is the key of success": ${result.length}`);