localStorage.setItem("ques", "Inside which HTML element do we put the JavaScript?, Where is the correct place to insert a JavaScript?,Ques3,Ques4");
localStorage.setItem("options", "javascript,scripting,script,js;In the body,Head, Body or head, Nowhere;a4,b4,c4,d4;a5,b5,c5,d5");
localStorage.setItem("correct", "3,3,2,4");
var index=0, score=0;
function incIndex(){
    document.getElementById("ques").innerHTML=localStorage.getItem("ques").split(",")[index];
    document.getElementById("option1").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[0];
    document.getElementById("option2").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[1];
    document.getElementById("option3").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[2];
    document.getElementById("option4").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[3];
    
}
function setContent(){
    index++;
    document.getElementById("ques").innerHTML=localStorage.getItem("ques").split(",")[index];
    document.getElementById("option1").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[0];
    document.getElementById("option2").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[1];
    document.getElementById("option3").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[2];
    document.getElementById("option4").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[3];

    
}
function saveAnswer(ans){
    alert(ans);
    var correctAns=localStorage.getItem("correct").split(",")[index];
    alert(correctAns);
    if(ans==correctAns)
        {
            score++;
            alert("Right ans");
            alert(score);
        }
    else{ alert("Wrong ans");}
}