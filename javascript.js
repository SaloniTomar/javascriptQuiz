localStorage.clear();
localStorage.setItem("ques", "1. Inside which HTML element do we put the JavaScript?,2. Where is the correct place to insert a JavaScript?,3. How do you create a function in JavaScript?,4. How to write an IF statement in JavaScript?,5. How can you add a comment in a JavaScript?");
                     
localStorage.setItem("options", "javascript,scripting,script,js;In the body,Head, Body or head, Nowhere;function:myFunction(),function myFunction,function=myFunction,function = new myFunction;if i == 5 then,if (i == 5),if i = 5, if i = 5 then;<--This is a comment-->,'This is a comment,//This is a comment,<--This is a comment");

localStorage.setItem("correct", "3,3,2,2,3");

var index=-1, score=0;

function checkUser(){
    var name= localStorage.getItem("name");
    if(name){
        document.getElementById("userData").style.display="none";
        document.getElementById("content").style.display="block";
        setContent();
    }
}

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
    }
    index++;
    
    var arr=[localStorage.getItem("name"),localStorage.getItem("ques").split(",")[index],localStorage.getItem("options").split(";")[index].split(",")[0], localStorage.getItem("options").split(";")[index].split(",")[1], localStorage.getItem("options").split(";")[index].split(",")[2], localStorage.getItem("options").split(";")[index].split(",")[3]];
    document.getElementById("content").innerHTML="<span id='username'>Welcome "+arr[0]+"</span>";
    document.getElementById("content").innerHTML+="<p id='ques'>"+ arr[1]+"</p>";
    document.getElementById("content").innerHTML+="<button id='btn1' onclick=storeAnswer('1')><a id='option1'>"+arr[2]+"</a></button><br>";
    document.getElementById("content").innerHTML+="<button id='btn2' onclick=storeAnswer('2')><a id='option2'>"+arr[3]+"</a></button><br>";
    document.getElementById("content").innerHTML+="<button id='btn3' onclick=storeAnswer('3')><a id='option3'>"+arr[4]+"</a></button><br>";
    document.getElementById("content").innerHTML+="<button id='btn4' onclick=storeAnswer('4')><a id='option4'>"+arr[5]+"</a></button><br>";
     if(index<4){
            document.getElementById("content").innerHTML+="<button id='next' onclick=setContent()>Next</button>";
        }
    else{
        document.getElementById("content").innerHTML+="<button id='submit2' onclick=showResult()>Submit</button>";
    }
}
function checkAnswer(ans){
    var correctAns=localStorage.getItem("correct").split(",")[index];
    if(ans==correctAns){
       score++;   
    }
    var quesNum= index.toString(10);
    localStorage.setItem(quesNum, ans);
}
function showResult(){
     var answer=localStorage.getItem("selectedOption");
    checkAnswer(answer);  
    var name= localStorage.getItem("name");
    document.getElementById("content").style.display="none";
    document.getElementById("result").innerHTML="<a style='font-size:50px'>"+name+", Your score is "+score+" out of 5.</a>";
}
