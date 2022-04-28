var idade = 20;

if(idade >= 18){
    console.log("Idade adequada para cadastro")
}else{
    console.log("Não é permitido o cadastro para menores de 18 anos")
}


var nomeParticipantes = ["Helena", "Chico", "Mário", "Roberto", "Rafael"];
console.log("Participantes");
console.log(nomeParticipantes);

var nomePalestrantes = ["Dante", "José", "Gabriel", "Paula"];
console.log("Palestrantes");
console.log(nomePalestrantes);


let quantidadeDeParticipantes = nomeParticipantes.length;

if(quantidadeDeParticipantes < 100){
    console.log("Cadastro Permitido")
}else{
    console.log("Numero máximo de participantes atingido")
}