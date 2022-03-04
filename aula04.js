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