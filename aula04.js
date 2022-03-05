const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];
const iniciais = nomes.map(nome => nome.charAt(0));
const comprimentos = nomes.map(nome => nome.length);
const todosComecamComA = nomes.every(nome => nome.toLocaleLowerCase().startsWith("a"));

console.log({ variavel: 'iniciais', data: iniciais });
console.log({ variavel: 'comprimentos', data: comprimentos });
console.log({ variavel: 'todosComecamComA', data: todosComecamComA });

const valores = [1, 2, 3, 4];
const soma = valores.reduce((acumulado, valor)=> acumulado + valor);

console.log({ variavel: 'soma', data: soma });

const filtrar = (vetor, condicao) => {
    const result = [];
    for (let i = 0; i < vetor.length; i++) {
        const elemento = vetor[i];
        if (condicao(elemento)) result.push(elemento)
    }
    return result;
}

console.log(filtrar(nomes, nome => nome.toLocaleLowerCase().startsWith("a")))
console.log(filtrar(valores, (num) => num % 2 == 0))