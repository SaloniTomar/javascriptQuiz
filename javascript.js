localStorage.setItem("ques", "1. Inside which HTML element do we put the JavaScript?,2. Where is the correct place to insert a JavaScript?,3. How do you create a function in JavaScript?,4. How to write an IF statement in JavaScript?,5. How can you add a comment in a JavaScript?");
                     
localStorage.setItem("options", "javascript,scripting,script,js;In the body,Head, Body or head, Nowhere;function:myFunction(),function myFunction,function=myFunction,function = new myFunction;if i == 5 then,if (i == 5),if i = 5, if i = 5 then;<--This is a comment-->,'This is a comment,//This is a comment,<--This is a comment");

localStorage.setItem("correct", "3,3,2,2,3");

var index=-1, score=0, c=1;

function continueQuiz(){
    localStorage.removeItem('selectedOption');
    var name= localStorage.getItem("name");
    var indexCurrent = localStorage.getItem(name+"Attempted").split(",");
    index=indexCurrent[indexCurrent.length-1];
    if(index >= 4){
        showResult();
    }
    var correctAnswers=localStorage.getItem(name+"Correct");
    if(correctAnswers){
        var scoreCurrent =correctAnswers.split(",");
        score=scoreCurrent.length;
    }
    document.getElementById("userData").style.display="none";
    document.getElementById("content").style.display="block";
    setContent();
}

function submitUsername(){
    var name= document.getElementById("name").value;
    if(name==="")
        {
            alert("Please enter your name");
        }
    else{
        if(name===localStorage.getItem("name")){
            continueQuiz();
        }
        else{
            localStorage.setItem("name", name);
            document.getElementById("userData").style.display="none";
            document.getElementById("content").style.display="block";
            setContent();
        }
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
    if(index!=(-1) && c){
        var answer=localStorage.getItem("selectedOption");
        checkAnswer(answer);
    }
    index++;
    
    var arr=[localStorage.getItem("name"),localStorage.getItem("ques").split(",")[index],localStorage.getItem("options").split(";")[index].split(",")[0], localStorage.getItem("options").split(";")[index].split(",")[1], localStorage.getItem("options").split(";")[index].split(",")[2], localStorage.getItem("options").split(";")[index].split(",")[3]];
    document.getElementById("content").innerHTML="<span id='username'>Welcome "+arr[0]+"</span>";
    document.getElementById("content").innerHTML+="<p id='ques'>"+ arr[1]+"</p>";
    for(var i=1; i<5; i++){
        document.getElementById("content").innerHTML+="<button id='btn"+i+"' onclick=storeAnswer("+i+")><a id='option"+i+"'>"+arr[i+1]+"</a></button><br>";
    }
     if(index<4){
            document.getElementById("content").innerHTML+="<button id='next' onclick=setContent()>Next</button>";
        }
    else{
        document.getElementById("content").innerHTML+="<button id='submit2' onclick=showResult()>Submit</button>";
    }
}

function checkAnswer(ans){
    var correctAns=localStorage.getItem("correct").split(",")[index];
    var name= localStorage.getItem("name");
    if(ans==correctAns){
       score++;   
    var addedAnswers = localStorage.getItem(name+"Correct");
    if (addedAnswers) {
        localStorage.setItem(name+"Correct", addedAnswers + ',' + ans);
    } else {
        localStorage.setItem(name+"Correct", ans);
    } 
    }
    var quesNum= index.toString(10);
    var addedQuestions = localStorage.getItem(name+"Attempted");
    if (addedQuestions) {
        localStorage.setItem(name+"Attempted", addedQuestions + ',' + index);
    } else {
        localStorage.setItem(name+"Attempted", index);
    }
}

function showResult(){
    var answer=localStorage.getItem("selectedOption");
    checkAnswer(answer);  
    var name= localStorage.getItem("name");
    var correctAnswers=localStorage.getItem(name+"Correct");
    if(correctAnswers){
        var scoreCurrent =correctAnswers.split(",");
        score=scoreCurrent.length;
    }
    document.getElementById("content").style.display="none";
    document.getElementById("result").innerHTML="<a style='font-size:50px'>"+name+", Your score is "+score+" out of 5</a>";
}
