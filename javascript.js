localStorage.clear();
localStorage.setItem("ques", "1. Inside which HTML element do we put the JavaScript?,2. Where is the correct place to insert a JavaScript?,3. How do you create a function in JavaScript?,4. How to write an IF statement in JavaScript?,5. How can you add a comment in a JavaScript?");
localStorage.setItem("options", "javascript,scripting,script,js;In the body,Head, Body or head, Nowhere;function:myFunction(),function myFunction,function=myFunction,function = new myFunction;if i == 5 then,if (i == 5),if i = 5, if i = 5 then;<--This is a comment-->,'This is a comment,//This is a comment,<--This is a comment");
localStorage.setItem("correct", "3,3,2,2,3");
var index=-1, score=0;

function setContent(){
    index++;
    var arr=[localStorage.getItem("ques").split(",")[index],localStorage.getItem("options").split(";")[index].split(",")[0],localStorage.getItem("options").split(";")[index].split(",")[1],localStorage.getItem("options").split(";")[index].split(",")[2],localStorage.getItem("options").split(";")[index].split(",")[3]];
    document.getElementById("ques").innerHTML=arr[0];
    document.getElementById("option1").innerHTML=arr[1];
    document.getElementById("option2").innerHTML=arr[2];
    document.getElementById("option3").innerHTML=arr[3];
    document.getElementById("option4").innerHTML=arr[4];
  
    
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
        localStorage.setItem('score', index+1);
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
    var result=localStorage.score.split(",").length;
    document.getElementById("content").style.display="none";
    document.getElementById("result").innerHTML="<a style='font-size:50px'>Your score is "+score+"</a>";
   // alert("Your score is "+result);
}
