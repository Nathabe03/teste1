import { Clientes } from "./entidades/Clientes"
import { Cortes } from "./entidades/Cortes"
import { Funcionarios } from "./entidades/Funcionarios"

const client1 = new Clientes("Ronaldo", 20)
const client2 = new Clientes("Yamal", 17)

const corte1 = new Cortes("Platinado", 50)
const corte2 = new Cortes("Militar", 25)

const funcionario1 = new Funcionarios("Alex", 3333)
const funcionario2 = new Funcionarios("Renan", 2222)


console.log (client2.desconto(funcionario2, corte1))
