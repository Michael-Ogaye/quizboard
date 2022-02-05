const buton = document.getElementById("btn");
buton.addEventListener("click",(e)=>{
    e.preventDefault();
    
    

    var cnt = 0;
    var q1 = document.quiz.qsn1.value;
    if(q1 =="HTML"){cnt = cnt +10 ;}
    var q2 = document.quiz.qsn2.value;
    if (q2 == "ECMAscript"){ cnt = cnt+10;}
    var q3 = document.quiz.qsn3.value;
    if (q3 =="Yes"){cnt=+ 10;}
    var q4 = document.quiz.qsn4.value;
    if (q4 == "Yes"){cnt=+ 10;}
    var q5 = document.quiz.value;
    if(q5 =="Yes"){cnt =+ 10;}
    var score= document.getElementsByClassName('score')
    score.innerHtml= `<p> You have scored ${ cnt }`;
    var forma= document.quiz;
    forma.style.display = "none";
})

