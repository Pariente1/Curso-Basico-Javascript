const player = parseInt(prompt("Escoge un valor: Piedra(1), papel(2), tijera(3)"));
var pc = Math.floor(Math.random() * (4-1)) + 1;
var stone = 1;
var paper = 2;
var scissor = 3;


switch(true){
    case (player == 1 && pc == 3 || player == 2 && pc == 1 || player == 3 && pc == 2): 
        console.log("Player Won")
        break;
    case (player == 1 && pc == 2 || player == 2 && pc == 3 || player == 3 && pc == 1):
        console.log("Pc won")
        break;
    case (player == pc):
        console.log("Draw")
        break;
    default:
        console.log("You must choose between numbers 1-3")
}