
function student(gradScore,hscScore,sccScore,cadidateName){
    var score=( gradScore >=70 || hscScore >= 80 || sccScore >=90)? `Congrates ${cadidateName} you ar eligible for TCS interview`: `Unfortunately ${cadidateName} you are not eligible for interview`;
    console.log(score);
}
student(80,86,90,"Suraj");
student(70,65,55,"akash");
student(60,79,88,"ravi");