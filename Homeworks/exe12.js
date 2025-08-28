const readlineSync = require('readline-sync');

let salarioanual = readlineSync.questionFloat ("Qual o salário anual ? ")
let tempoS = readlineSync.questionFloat ("Qual o tempo de serviço ? ")
let desempenho = readlineSync.questionFloat ("Digite o desempenho : ")

let bonus = 0;

if (tempoS <= 2 ) {
   bonus = salarioanual * 0.05 

}else if (tempoS >=3 && tempoS <= 5 ){
    bonus = salarioanual * 0.10

}else if(tempoS > 5){
    bonus = salarioanual * 0.15
}


if (desempenho <= 4){
    console.log("não obteve bônus por desempenho")
} else if (desempenho >= 5 && desempenho <= 7 ){
    bonus += salarioanual * 0.20
} else if (desempenho >= 8) {
    bonus += salarioanual * 0.50
}

console.log (`O bônus total foi de ${bonus}$`)
