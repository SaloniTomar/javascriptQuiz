//Store the questions in the localStorage against the keyvalue "ques" 
localStorage.setItem("ques", "1. Inside which HTML element do we put the JavaScript?,2. Where is the correct place to insert a JavaScript?,3. How do you create a function in JavaScript?,4. How to write an IF statement in JavaScript?,5. How can you add a comment in a JavaScript?");

//Store the options of the questions in the localStorage against the keyvalue "options" 
localStorage.setItem("options", "javascript,scripting,script,js;In the body,Head, Body or head, Nowhere;function:myFunction(),function myFunction,function=myFunction,function = new myFunction;if i == 5 then,if (i == 5),if i = 5, if i = 5 then;<--This is a comment-->,'This is a comment,//This is a comment,<--This is a comment");

//Store the correct answers of the questions in the localStorage against the keyvalue "correct" 
localStorage.setItem("correct", "3,3,2,2,3");

//Counter for the question index and score
var index=-1, score=0;
/*
.........For existing user to continue the quiz.................
*/
function continueQuiz(){
    
    //Remove the previously stored option
    localStorage.removeItem('selectedOption');
    
    
    var name= localStorage.getItem("name");
    var indexCurrent = localStorage.getItem(name+"Attempted").split(",");
    index=indexCurrent[indexCurrent.length-1];
    //If the existing user had completed the quiz earlier
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

/*
.........For the user to submit the userdata.................
*/
function submitUsername(){
    var name= document.getElementById("name").value;
    //If no name has been entered
    if(name==="")
        {
            alert("Please enter your name");
        }
    else{
        // If the user has previously given the quiz
        if(name===localStorage.getItem("name")){
            continueQuiz();
        }
        // For the new user
        else{
            localStorage.setItem("name", name);
            document.getElementById("userData").style.display="none";
            document.getElementById("content").style.display="block";
            setContent();
        }
    }
}

/*
.........To store the currently selected options and remove the previously selected option.................
*/
function storeAnswer(ans){
    var selectedOption = localStorage.getItem('selectedOption');
    if (selectedOption) {
            localStorage.removeItem('selectedOption');
        }
    localStorage.setItem("selectedOption",ans);
}

/*
.........To set the content of the quiz.................
*/
function setContent(){
    //To check the answer before setting up the next question
    if(index!=(-1)){
        var answer=localStorage.getItem("selectedOption");
        checkAnswer(answer);
    }
    
    index++;
    //Get the question, corresponding options and username in an array for dispalying
    var arr=[localStorage.getItem("name"),localStorage.getItem("ques").split(",")[index],localStorage.getItem("options").split(";")[index].split(",")[0], localStorage.getItem("options").split(";")[index].split(",")[1], localStorage.getItem("options").split(";")[index].split(",")[2], localStorage.getItem("options").split(";")[index].split(",")[3]];
    //Displaying username
    document.getElementById("content").innerHTML="<span id='username'>Welcome "+arr[0]+"</span>";
    
    //Display the question
    document.getElementById("content").innerHTML+="<p class='subHeading' id='ques'>"+ arr[1]+"</p>";
    
    //Display the options
    for(var i=1; i<5; i++){
        document.getElementById("content").innerHTML+="<button id='btn"+i+"' onclick=storeAnswer("+i+")><a id='option"+i+"'>"+arr[i+1]+"</a></button><br>";
    }
    
    //Set Next button till question 4 and Submit button for the last question
     if(index<4){
            document.getElementById("content").innerHTML+="<button class='navigationButtons' id='next' onclick=setContent()>Next</button>";
        }
    else{
        document.getElementById("content").innerHTML+="<button class='navigationButtons' id='submit2' onclick=showResult()>Submit</button>";
    }
}
/*
.........To check the answer selected by the user.................
*/
function checkAnswer(ans){
    //Get the correct answer from the localStorage
    var correctAns=localStorage.getItem("correct").split(",")[index];
    
    //Getting the name of the user to save the progress
    var name= localStorage.getItem("name");
    
    
    if(ans==correctAns){
        score++;
        //Set the correctly selected answer option with the user name in localStorage
        var addedAnswers = localStorage.getItem(name+"Correct");
        if (addedAnswers) {
            localStorage.setItem(name+"Correct", addedAnswers + ',' + ans);
        } else {
            localStorage.setItem(name+"Correct", ans);
        } 
    }
    
    //Set the attemted questions with the user name in localStorage
    var quesNum= index.toString(10);
    var addedQuestions = localStorage.getItem(name+"Attempted");
    if (addedQuestions) {
        localStorage.setItem(name+"Attempted", addedQuestions + ',' + index);
    } else {
        localStorage.setItem(name+"Attempted", index);
    }
}
/*
.........To show the final result.................
*/
function showResult(){
    //Check the answer of the last question
    var answer=localStorage.getItem("selectedOption");
    checkAnswer(answer);  
    
    //Calculating the score of the user by finding the length of the correct answers array from the localStorage
    var name= localStorage.getItem("name");
    var correctAnswers=localStorage.getItem(name+"Correct");
    if(correctAnswers){
        var scoreCurrent =correctAnswers.split(",");
        score=scoreCurrent.length;
    }
    
    //Hiding the questions and options
    document.getElementById("content").style.display="none";
    //Displaying the result
    document.getElementById("result").innerHTML="<a style='font-size:50px'>"+name+", Your score is "+score+" out of 5</a>";
}
