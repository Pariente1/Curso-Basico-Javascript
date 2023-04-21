//Si el usuario es mayor a 18 años puede votar, de otra manera no. 

var edad = 18;

if (edad === 18) {
    console.log("puedes votar, felicidades es tu primera votación");
} else if (edad === 20) {
    console.log("puedes votar, ya tienes 20 prro! :v");
}else if (edad === 25) {
    console.log("Se te esta llendo el tren wey!");
}else if (edad === 60) {
    console.log("Que feo, ya estas viejo T_T");
}else if (edad > 18) {
    console.log("puedes votar, ya te estas haciendo viejo. Chale :v");
} else {
    console.log("Tu no puedes votar, ve al kinder prro.")
}

//Este se llama operador ternario. Generamos la condicion donde dice condition. El If seria donde dice true y el else donde dice false.

condition ? true : false; 

//por ejemplo

var numero = 1;
var resultado = numero === 1 ? "si, soy un 1" : "No, no soy 1";