const player = parseInt(prompt("Escoge un valor: Piedra(1), papel(2), tijera(3)"));
var pc = Math.floor(Math.random() * (4-1)) + 1;
var stone = 1;
var paper = 2;
var scissor = 3;


if (player == 1 && pc == 3 || player == 2 && pc == 1 || player == 3 && pc == 2) {
    console.log("player won")
} else if (player == 1 && pc == 2 || player == 2 && pc == 3 || player == 3 && pc == 1) {
    console.log("pc won")
} else if (player == pc){
    console.log("Draw")
}
else {
    console.log("Insert a number betwen 1-3 to choose your hand")
};