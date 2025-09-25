import { Cortes } from "./Cortes";
import { Funcionarios } from "./Funcionarios";

export class Clientes {
    
    nome: string
    idade: number
    corte?: Cortes []
    funcionarios?: Funcionarios[]
    
    constructor(nome:string, idade:number){

    this.nome = nome
    this.idade = idade
    }

desconto (funcionario:Funcionarios, corte:Cortes){
    let valoratual: number
    let resposta: string

    if(this.idade < 18){
        valoratual = corte.valordocorte * 0.30
        resposta = `O cleinte ${this.nome} cortou o cabelo com o funcionário ${funcionario.nome} e fez o corte ${corte.corte} com o valor total de ${valoratual} R$`
    
    }else {
        resposta = `O cliente ${this.nome} cortou o cabelo com o funcionário ${funcionario.nome} e fez o corte ${corte.corte} com o valor total de ${corte.valordocorte} R$`
 
    } return resposta
}
}