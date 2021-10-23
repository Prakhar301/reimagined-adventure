function store(){
    player1=document.getElementById("1_name").value;
    player2=document.getElementById("2_name").value;
    localStorage.setItem('player1',player1);
    localStorage.setItem('player2',player2);
    window.location="style.html";    
}