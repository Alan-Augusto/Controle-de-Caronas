import { Local } from "./local.model";
import { Passageiro } from "./passageiro.model";

export interface Carona {
    descricao: string;
    idOrigem: number;
    idDestino: number;
    data: string;
    idPassageiros: number[];
}