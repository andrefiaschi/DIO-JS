/*
var nome = "André Fiaschi";
var idade = 32;
var idade2 = 10;
var frase = "Eu detesto futebol!"
alert("Bem vindo, " + nome + "! Você tem " + idade + " anos!");
//alert(idade + idade2);
var n1 = 55;
var n2 = 3;


console.log(nome);
console.log(idade * idade2);
console.log(frase.replace("detesto", "tenho ódio de"));
console.log(frase.toUpperCase());
console.log(n1*n2);


var lista = ["apple","pear","orange"];

console.log(lista[1]);
alert(lista[2]);

lista.push("grape");
console.log(lista[3]);

lista.pop();
console.log(lista);
console.log(lista.sort());

console.log(lista.toString());
console.log(lista.join(" // "));



var fruta = [
    {name: "apple", color: "red"},
    {name: "pear", color: "green"},
    {name: "orange", color: "orange"}
];

console.log(fruta);
alert("A fruta escolhida foi: " + fruta[2].name,);



var idade = prompt("Digita a sua idade:");

if (idade>=18) {
    alert("Você é maior de idade!");
}
else {
    alert("Você é um bocó ainda!");
}


var count = 0;

while (count<=5) {
    console.log("Estamos em: "+count);
    count++;
}

*/

var count;

for (count = 0; count <= 5; count++) {
    console.log("Estamos em =>>> "+count);
}

var hoje = new Date();

alert(hoje.getMonth()+1);