const buton = document.getElementById("btn");
buton.addEventListener("click",(e)=>{
    e.preventDefault();
    
    

    var i = 0;
    
    var q1 = document.quiz.qsn1.value;
    var q2 = document.quiz.qsn2.value;
    var q3 = document.quiz.qsn3.value;
    var q4 = document.quiz.qsn4.value;
    var q5 = document.quiz.qsn5.value;
    
    if(q1 =="HTML"){ i += 10 }
    if (q2 == "ECMAscript"){ i +=10}
    if (q3 =="Yes"){i +=10}
    if (q4 == "Yes"){i += 10}
    if(q5 =="Yes"){i += 10}


    var sco = document.querySelector('.scora');
    sco.innerHTML = `<p> You have scored: ${ i }/50</p>`;
    sco.style.display="block";
    var forma= document.quiz;
    forma.style.display = "none";
    if( i <30){sco.innerHTML += `<P> you failed this test,please refresh the page and try again </p>`}
    if(i > 30){sco.innerHTML += `<p> CONGRATULATIONS!, you passed the test refresh the page and proceed</p>` }


    
})

