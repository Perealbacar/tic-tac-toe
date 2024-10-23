/*function Hello(){
    console.log("Hello World!");
    const titulo = document.querySelector("div");
    titulo.textContent = "Hello World!";
    
}
*/

const Hello = function (name){
    console.log("Hello " + name);
    const titulo = document.querySelector("div");
    titulo.textContent = "Hello " + name;
}


Hello("lala");

const Gameboard = function(){
    let board = [];

    for(let i = 0 ; i < 8; i++){
        board.push(" ");
    }
    console.log(board);

    const playerInput = function(position){
        board[position - 1] = "x";    
    }
    return {board, playerInput}
}

const lala = Gameboard();

//player A = x
//player B = o

//round++

//