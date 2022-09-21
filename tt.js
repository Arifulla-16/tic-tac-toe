var letter = ["X","O"];
var turn = 0;

var moves=0;

var board = new Array(3);

for (var i = 0; i < board.length; i++) {
  board[i] = new Array(3);
}


var idx=0;

var cell1 = document.getElementById("c00");
var cell2 = document.getElementById("c01");
var cell3 = document.getElementById("c02");
var cell4 = document.getElementById("c10");
var cell5 = document.getElementById("c11");
var cell6 = document.getElementById("c12");
var cell7 = document.getElementById("c20");
var cell8 = document.getElementById("c21");
var cell9 = document.getElementById("c22");

var tt = document.querySelector("#turn #XO");



cell1.addEventListener("click",adder);
cell2.addEventListener("click",adder);
cell3.addEventListener("click",adder);
cell4.addEventListener("click",adder);
cell5.addEventListener("click",adder);
cell6.addEventListener("click",adder);
cell7.addEventListener("click",adder);
cell8.addEventListener("click",adder);
cell9.addEventListener("click",adder);


function adder(){
    if(this.innerHTML!=""){
        return;
    }
    moves++;
    this.innerHTML=letter[turn];
    if(turn===1){
        board[this.getAttribute('data-cell').slice(0,-1)][this.getAttribute('data-cell').slice(-1)]="O";
        checker("O",this.getAttribute('data-cell').slice(0,-1),this.getAttribute('data-cell').slice(-1));
        turn=0;
        tt.innerHTML=letter[turn];
    }
    else if(turn===0){
        board[this.getAttribute('data-cell').slice(0,-1)][this.getAttribute('data-cell').slice(-1)]="X";
        checker("X",this.getAttribute('data-cell').slice(0,-1),this.getAttribute('data-cell').slice(-1));
        turn=1;
        tt.innerHTML=letter[turn];
    }
    if(moves===9){
       gamee_end();
       return;
    }
    console.log(board);
}


function checker(data,i,j){
    console.log(i+"  "+j);
    if(check_row(i,data) || check_col(j,data) || check_diag(i,j,data) || check_alterdiag(i,j,data)){
        game_end();
    }
}

function check_row(i,data){
    if(board[i][0]===data&&board[i][1]===data&&board[i][2]===data){
        console.log("rows");
        return true;
    }
    return false;
}

function check_col(j,data){
    if(board[0][j]===data&&board[1][j]===data&&board[2][j]===data){
        console.log("cols");
        return true;
    }
    return false;
}

function check_diag(i,j,data){
    if(i===j){
        if(board[0][0]===data&&board[1][1]===data&&board[2][2]===data){
            console.log("diag");
            return true;
        }
        return false;
    }
    return false;
}

function check_alterdiag(i,j,data){
    if(parseInt(i)+parseInt(j)==2){
        if(board[0][2]===data && board[1][1]===data && board[2][0]===data){
            console.log("alterdiag");
            return true;
        }
        return false;
    }
    return false;
}

function gamee_end(){

    var ab = document.querySelector(".winner span");

    ab.innerHTML="Draw!!";
    var bc = document.querySelector(".winner");
    bc.style.display="grid";
    bc.addEventListener("click",restarter);
}


function game_end(){

    var ab = document.querySelector(".winner span");

    ab.innerHTML=letter[turn]+" wins";
    var bc = document.querySelector(".winner");
    bc.style.display="grid";
    bc.addEventListener("click",restarter);
}

function restarter(){
    cell1.innerHTML="";
    cell2.innerHTML="";
    cell3.innerHTML="";
    cell4.innerHTML="";
    cell5.innerHTML="";
    cell6.innerHTML="";
    cell7.innerHTML="";
    cell8.innerHTML="";
    cell9.innerHTML="";

    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            board[i][j]=undefined;
        }
    }
    moves=0;
    var bc = document.querySelector(".winner");
    bc.style.display="none";
}
