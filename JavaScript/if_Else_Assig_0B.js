function  score(gradScore,hscScore,sccScore,cadidateName)
{
    if(gradScore >=70 || hscScore >= 80 || sccScore >=90)
    {
        console.log(`Congrates ${cadidateName} you ar eligible for TCS interview`)
    }
    else
    {
        console.log(`Unfortunately ${cadidateName} you are not eligible for interview`);
    }
}
score(80,86,90,"Suraj");
score(70,65,55,"akash");
score(60,79,88,"ravi");