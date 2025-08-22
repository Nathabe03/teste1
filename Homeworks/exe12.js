import readlineSync from 'readline-sync';

let salarioanual = readlineSync.question ("Qual o salário anual ? ")
let tempos = readlineSync.question ("Qual o tempo de serviço ? ")
let desempenho = readlineSync.question ("Digite o desempenho : ")

let bonus = 0;

if (tempos <= 2 ) {
   bonus = salarioanual * 0.05 
}else if (tempos >=3 && tempos <= 5 ){
    bonus = salarioanual * 0.10
}else {
    bonus = salarioanual * 0.15
}

if (desempenho >= 1 && desempenho <= 4){
    console.log("não obteve bônus por desempenho")
} else if (desempenho >= 5 && desempenho <= 7 ){
    bonus += salarioanual * 0.20
} else {
    bonus += salarioanual * 0.50
}

console.log (`O bônus total foi de ${bonus}$`)
