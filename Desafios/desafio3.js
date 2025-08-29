let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function resultados(item, indice){
    if (numeros[indice] % 2 == 0){
        console.log (`Esse número ${numeros[indice]} é par`)
    }
} console.log(numeros) 
numeros.forEach(resultados);