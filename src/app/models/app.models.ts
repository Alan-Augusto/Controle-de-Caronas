import { Local } from "./local.model";

export interface Passageiro {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    img: string;
}
export interface Carona {
    id: number;
    descricao: string;
    origem: Local;
    destino: Local;
    data: Date;
    passageiros: Passageiro[];
}

//Ver a relação entre um passageiro e uma carona
export interface PassageiroCarona {
    id: number;
    idCarona: number;
    idPassageiro: number;
    valor: number;
    indpago: boolean;
}


export const CaronasPadroes: Carona[] = []