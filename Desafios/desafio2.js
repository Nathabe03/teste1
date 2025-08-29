let estoque = [
    {nome : "teclado", valor:20},
    {nome : "mouse", valor: 15},
    {nome : "mousepad", valor: 5}
]
let valor = 0;


function exibir(item, indice){
    if(estoque[indice].valor > 10){
        console.log(`O item ${estoque[indice].nome}, custa ${estoque[indice].valor}`)
    }
    
}
console.log(estoque)
estoque.forEach(exibir)