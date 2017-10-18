localStorage.clear();
localStorage.setItem("ques", "Inside which HTML element do we put the JavaScript?, Where is the correct place to insert a JavaScript?,How do you create a function in JavaScript?,How to write an IF statement in JavaScript?,How can you add a comment in a JavaScript?");
localStorage.setItem("options", "javascript,scripting,script,js;In the body,Head, Body or head, Nowhere;function:myFunction(),function myFunction,function=myFunction,function = new myFunction;if i == 5 then,if (i == 5),if i = 5, if i = 5 then;<--This is a comment-->,'This is a comment,//This is a comment,<--This is a comment");
localStorage.setItem("correct", "3,3,2,2,3");
var index=-1, score=0;

function setContent(){
    index++;
    document.getElementById("ques").innerHTML=localStorage.getItem("ques").split(",")[index];
    document.getElementById("option1").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[0];
    document.getElementById("option2").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[1];
    document.getElementById("option3").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[2];
    document.getElementById("option4").innerHTML=localStorage.getItem("options").split(";")[index].split(",")[3];
  
    
}
function saveAnswer(ans){
   // alert(ans);
    var correctAns=localStorage.getItem("correct").split(",")[index];
   // alert(correctAns);
    if(ans==correctAns)
        {
            score++;
            alert("Right ans");
            //alert(score);
             var addedScore = localStorage.getItem('score');
    if (addedScore) {
        localStorage.setItem('score', addedScore + ',' + index);
    } else {
        localStorage.setItem('score', index);
    }
        }
    else{ alert("Wrong ans");}
    if(index<4)
        {
             setContent();
        }
    else
        showResult();
}
function showResult(){
    var result=localStorage.score.length;
    alert("Your score is "+result);
}
