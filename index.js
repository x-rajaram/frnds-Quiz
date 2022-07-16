var readlinesync=require("readline-sync");
var uname=readlinesync.question("may i know ur name?")
//var useranswer=readlinesync.question("welcome "+uname+" DO YOU KNOW Raja?");
var score=0;

function play(question,answer){
  var userAnswer=readlinesync.question(question);
  if(answer.toUpperCase()===userAnswer.toUpperCase()){
    console.log("you are right");
    score=score+1
    console.log("your score is ",score);
  }else{
    console.log("your wrong lets guess");
    
  }
console.log("cool., you getting know me")
}
var questionAndAnswers=[{
  question: "welcome "+uname+" DO YOU KNOW Raja? ",
  answer: "Yes"  
},{
  question: "where do i live? ",
  answer: "Bangalore"
},{
  question:"where am i from?",
  answer: "Madurai"
  },{
  question: "How do you know me? ",
  answer: "school"
  }                        
];
for(var i=0;i<questionAndAnswers.length;i++){  //console.log("test"+questionAndAnswers[i].question,questionAndAnswers[i].answer);
  var urquestion=questionAndAnswers[i].question;
  var ans=questionAndAnswers[i].answer;
  play(urquestion,ans);
}
