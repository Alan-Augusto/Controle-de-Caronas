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
    data: Date;
    passageiros: Passageiro[];
}


export interface PassageiroCarona {
    id: number;
    idCarona: number;
    idPassageiro: number;
    valor: number;
    indpago: boolean;
}
