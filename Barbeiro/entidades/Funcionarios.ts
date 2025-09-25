import { Cortes } from "./Cortes";

export class Funcionarios {
    nome: string
    matricula: number
    cortes?: Cortes [];

    constructor(nome:string, matricula:number){
        this.nome = nome
        this.matricula = matricula
    }
}