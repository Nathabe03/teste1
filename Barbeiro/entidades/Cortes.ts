import { Funcionarios } from "./Funcionarios"
import {Clientes} from "./Clientes"

export class Cortes {
    corte: string
    valordocorte: number
    funcionario?: Funcionarios[] = []
    cliente?: Clientes

    constructor(corte: string, valordocorte:number){
        this.corte = corte
        this.valordocorte = valordocorte
    
    }
    
    
}

