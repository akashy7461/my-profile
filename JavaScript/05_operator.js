function squareOfWordLength(word,word1,word2){
    console.log(`Find the length JavaScript:${word.length}`);
    console.log(`square of javaScript:${word.length*word.length}`);
    console.log(`--------------------------------------------------`);
    console.log(`Find the length Google Chrome:${word1.length}`);
    console.log(`square of Google Chrome:${word1.length*word1.length}`);
    console.log(`--------------------------------------------------`);
    console.log(`Find the length Developer Smart:${word2.length}`);
    console.log(`square of Developer Smart:${word2.length*word2.length}`);
    return "word","word1","word2";
}
squareOfWordLength("javaScript","Google Chrome","Developer Smart");

function operator(){
    var string="I am Angular Developer";
    console.log(`------------------1 step-------------`);
    var len=string.length;
    console.log(`given string:${string}`);
    console.log(`string length: ${len}`);
    
    var sp=string.split(" ");
    console.log(`string total word:${sp.length}`);
    console.log(`------------------2 step-------------`);
    console.log(`string length divided by total number of word:${string.length/sp.length}`);
    console.log(`string length multiple by total number of word:${string.length*sp.length}`);
}
operator();