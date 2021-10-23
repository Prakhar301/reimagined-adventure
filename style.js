var actual_answer=0;
var play1_name=localStorage.getItem('player1');
var play2_name=localStorage.getItem('player2');
var play1_score=0;
var play2_score=0;
document.getElementById("player1_name").innerHTML = play1_name+":";
document.getElementById("player2_name").innerHTML=play2_name+":";
document.getElementById("player1_score").innerHTML=play1_score;
document.getElementById("player2_score").innerHTML=play2_score;
document.getElementById("player_q").innerHTML="Question Turn - "+play1_name;
document.getElementById("player_a").innerHTML="Answer Turn - "+play2_name;
function click(){
    numer1=document.getElementById("num1").value; 
    localStorage.setItem("num1",numer1);
    numer2=document.getElementById("num2").value;
    actual_answer=parseInt(numer1)*parseInt(numer2);
    var label="<h4>Q."+numer1+"X"+numer2+"</h4>";
    var input="<br><input type='text' id='ifg' class='form-control'> ";
    var button="<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
    full=label+input+button;
    document.getElementById("dish").innerHTML=full;
    document.getElementById("num1").innerHTML="";
    document.getElementById("num2").innerHTML="";
}
question="player1";
answer="player2";
function check(){
    ans=document.getElementById("ifg").value;
    if(ans==actual_answer){
        if(answer=="player1"){
            play1_score=play1_score+1;
            document.getElementById("player1_score").innerHTML=play1_score;
        }
        else{
            play2_score=play2_score+1;
            document.getElementById("player2_score").innerHTML=play2_score;
        }
        if(question=="player1"){
            question="player2";
            document.getElementById("player_q").innerHTML="Question Turn - "+play2_name;
        }
        else{
            question="player1";
            document.getElementById("player_q").innerHTML="Answer Turn - "+play1_name;
        }
        if(answer=="player1"){
            answer="player2";
            document.getElementById("player_a").innerHTML="Answer Turn - "+play2_name;
        }
        else{
            answer="player1";
            document.getElementById("player_a").innerHTML="Answer Turn - "+play1_name;
        }
    }
}