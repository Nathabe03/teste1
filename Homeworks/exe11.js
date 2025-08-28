const readlineSync = require('readline-sync');


let valor = parseFloat(readlineSync.question("Digite o valor R$:"))

let selecao = Number(readlineSync.question("converter para: (1 -USD/ 2 -EUR/ 3- CAD/4 -GBP) : "))

const valorUSD = 5.44
const valorEUR = 6.34
const valorCAD = 3.94
const valorGBP = 7.34

switch(selecao){
case 1:
    console.log(`R$: ${(valor / valorUSD)}`)
    break
 
case 2:
    console.log(`R$: ${(valor / valorEUR)}`)
    break

case 3:
    console.log(`R$: ${(valor / valorCAD)}`)
    break
case 4:
    console.log(`R$: ${(valor / valorGBP)}`)
    break

default:
console.log("Valor inválido")
}



/*if (selecao === "USD") {
    console.log(`R$ ${valor} = US$ ${(valor / valorUSD)}`)
}else if (selecao === "EUR") {
    console.log(`R$ ${valor} = EUR$ ${(valor / valorEUR)}`)
}else if (selecao === "CAD") {
    console.log(`R$ ${valor} = CAD$ ${(valor / valorCAD)}`)
}else {
    console.log(`R$ ${valor} = GBP$ ${(valor / valorGBP)}`)
}*/