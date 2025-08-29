let estoque = [
    {nome : "teclado", valor:20},
    {nome : "mouse", valor: 15},
    {nome : "mousepad", valor: 5}
]
let valor = 0;


function exibir(items, produto){
    if(estoque[produto].valor > 10){
        console.log(`O item ${estoque[produto].nome}, custa ${estoque[produto].valor}`)
    }
    
}
console.log(estoque)
estoque.forEach(exibir)

