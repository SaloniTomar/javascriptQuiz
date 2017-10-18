localStorage.clear();
localStorage.setItem("ques", "1. Inside which HTML element do we put the JavaScript?,2. Where is the correct place to insert a JavaScript?,3. How do you create a function in JavaScript?,4. How to write an IF statement in JavaScript?,5. How can you add a comment in a JavaScript?");
localStorage.setItem("options", "javascript,scripting,script,js;In the body,Head, Body or head, Nowhere;function:myFunction(),function myFunction,function=myFunction,function = new myFunction;if i == 5 then,if (i == 5),if i = 5, if i = 5 then;<--This is a comment-->,'This is a comment,//This is a comment,<--This is a comment");
localStorage.setItem("correct", "3,3,2,2,3");
var index=-1, score=0;

function submitUsername(){
    var name= document.getElementById("name").value;
    if(name==="")
        {
            alert("Please enter your name");
        }
    else{
        localStorage.setItem("name", name);
        document.getElementById("userData").style.display="none";
        document.getElementById("content").style.display="block";
        setContent();
    }
}
function storeAnswer(ans){
    //alert(ans);
    document.getElementById(ans).style.backgroundColor="steelblue";
    for(var x=1; x<=4;x++){
        if(x==ans);
        else{
            document.getElementById(x).style.backgroundColor="darkgray";
        }
    }
    var selectedOption = localStorage.getItem('selectedOption');
    if (selectedOption) {
            localStorage.removeItem('selectedOption');
        }
    localStorage.setItem("selectedOption",ans);
}

function setContent(){
    if(index!=(-1)){
        var answer=localStorage.getItem("selectedOption");
        checkAnswer(answer);
        for(var x=1; x<=4;x++){
            document.getElementById(x).style.backgroundColor="darkgray";
        }
    }
    index++;
    var arr=[localStorage.getItem("name"), localStorage.getItem("ques").split(",")[index],localStorage.getItem("options").split(";")[index].split(",")[0],localStorage.getItem("options").split(";")[index].split(",")[1],localStorage.getItem("options").split(";")[index].split(",")[2],localStorage.getItem("options").split(";")[index].split(",")[3]];
    document.getElementById("username").innerHTML="Welcome "+arr[0];
    document.getElementById("ques").innerHTML=arr[1];
    document.getElementById("option1").innerHTML=arr[2];
    document.getElementById("option2").innerHTML=arr[3];
    document.getElementById("option3").innerHTML=arr[4];
    document.getElementById("option4").innerHTML=arr[5];
     if(index>=4)
        {
            document.getElementById("next").style.display="none";
            document.getElementById("submit2").style.display="block";
        }     
}
function checkAnswer(ans){
    var correctAns=localStorage.getItem("correct").split(",")[index];
    if(ans==correctAns){
        score++;
        var addedScore = localStorage.getItem('score');
        if (addedScore) {
            localStorage.setItem('score', addedScore + ',' + index);
        }
        else {
            localStorage.setItem('score', index);
        }
       // alert("Correct ans");
    }
    else{ 
       // alert("Wrong ans");
    }
}
function showResult(){
     var answer=localStorage.getItem("selectedOption");
    checkAnswer(answer);  
    var name= document.getElementById("name").value;
    document.getElementById("content").style.display="none";
    var score = localStorage.getItem("score"), finalScore=0;
    if(score){
        finalScore= score.split(",").length;
    }
    document.getElementById("result").innerHTML="<a style='font-size:50px'>"+name+", Your score is "+finalScore+" out of 5</a>";
}

