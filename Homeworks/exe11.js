import readlineSync from 'readline-sync';


let valor = parseFloat(readlineSync.question("Digite o valor R$:"))

let selecao = readlineSync.question("converter para (USD/EUR/CAD/GBP)")

const valorUSD = 5.44
const valorEUR = 6.34
const valorCAD = 3.94
const valorGBP = 7.34

if (selecao === "USD") {
    console.log(`R$ ${valor} = US$ ${(valor / valorUSD)}`)
}else if (selecao === "EUR") {
    console.log(`R$ ${valor} = EUR$ ${(valor / valorEUR)}`)
}else if (selecao === "CAD") {
    console.log(`R$ ${valor} = CAD$ ${(valor / valorCAD)}`)
}else {
    console.log(`R$ ${valor} = GBP$ ${(valor / valorGBP)}`)
}