let numeros = [1,2,3,4,5]


console.log(numeros)
function multiplicar(numero){
    console.log(`A multiplicação dos números da array x2 é igual a ${numero*2}`)
}
 
numeros.forEach(multiplicar)

/* para usarmos o forEach juntamente de uma array, declaramos a lista, pedimos para exibi-la com os valores e damos um nome para a função, por exemplo function ....(x), nesse caso os ... será a ação da função, somar, dividir, multiplicar e afins, algo que seja intuitivo para a função, então ficaria 
function multiplicação(). Agora o segundo passo é declarar os valores dentro do parâmetro, normalmente eles seguem uma ordem de valor, indice etc */
