export class ColunaGrafico {

    tipo: string;
    descricao: string;

    constructor(tipo: string, descricao: string) {
        this.tipo =  tipo;
        this.descricao = descricao;
    }

}

export class LinhaGrafico {

    valores: any[];

    constructor(valores: any[]) {
        this.valores = valores;
    }
}

export class SerieGrafico {

    name: string;
    data: any[];
    type: string;
    tooltip: any;
    color: string;
    zones: any[];
    size: string;
    innerSize: string;
    categories: string[];
    zIndex: any;
    marker: any;
    lineWidth: any;
    linkedTo: any;
    fillOpacity: any;

    constructor(nome: string, data: any[]) {
        this.name = nome;
        this.data = data;
    }
}
