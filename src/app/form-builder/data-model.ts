export class DetalhesCidade {
    id = 0;
    nome = '';
    endereco: Endereco[];
}

export class Endereco {
    cidade = '';
    estado = '';
    cep = '';
}


export const CIDADE: DetalhesCidade[]  =  [
    {
        id: 1,
        nome: 'Garanhuns', 
        endereco: [
            {cidade: '123 Main',  estado: 'Anywhere', cep: 'CA'},
            {cidade: '456 Maple', estado: 'Somewhere', cep: 'VA'},
          ]
    },
    {
        id: 2,
        nome: 'Juazeiro do Norte', 
        endereco: [
            {cidade: '123 Main',  estado: 'Anywhere', cep: 'CA'}
          ]
    },
    {
        id: 3,
        nome: 'Fortaleza', 
        endereco: [
            {cidade: '123 Main',  estado: 'Anywhere', cep: 'CA'}
          ]
    }
]

export const states = ['CA', 'MD', 'OH'];