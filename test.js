let question = document.getElementById("question");
let a = document.getElementById("1");
let b = document.getElementById("2");
let c = document.getElementById("3");
let d = document.getElementById("4");
let correctanswer = document.getElementById("correctanswer");
var g;
var answer;
var result = document.getElementById("result");
var option = [];


function loadDoc1() {

    question.innerText="";
    a.innerText="";
    b.innerText="";
    c.innerText="";
    d.innerText="";
    result.innerText="";
    correctanswer.innerText="";
   
    var xhttp = new XMLHttpRequest();
    var j=0;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let mydata = JSON.parse(this.responseText);
            
            console.log(mydata);

            console.log(mydata.results);

           // console.log(mydata.results);

            console.log(mydata.results[0].category);

            document.getElementById("quiz").style.display="block";

            question.innerText=mydata.results[0].question;

            g = Math.round(Math.random()*3);

            console.log(g);

            if(g==0){ answer = "a"; }
            else if(g==1){ answer = "b"; }
            else if(g==2){ answer = "c"; }
            else if(g==3){ answer = "d"; }


            


            for(var i=0;i<4;i++){
                if(i==g){
                    option[i]=mydata.results[0].correct_answer;
                }
                else{
                    option[i]=mydata.results[0].incorrect_answers[j];
                    j++;
                }
            }
            console.log(mydata.results[0].correct_answer);
            console.log(option);

            a.innerText=option[0];
            b.innerText=option[1];
            c.innerText=option[2];
            d.innerText=option[3];


        }
    };
    xhttp.open("GET", "https://opentdb.com/api.php?amount=1&type=multiple", true);
    xhttp.send();
}

function check(){
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;   
            console.log(value); 
            console.log(answer);  
            
            if(value==answer){
                result.style.color="green";
                correctanswer.style.color="green";
                result.innerText="your answer is correct!!!";
            }
            else{
                result.style.color="red";
                correctanswer.style.color="red";
                result.innerText="your answer is incorrect!!!";
            }
            correctanswer.innerText="correct answer is : " + answer;
        }
    }
}