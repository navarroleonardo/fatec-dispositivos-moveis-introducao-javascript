const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];
const iniciais = nomes.map(nome => nome.charAt(0));
const comprimentos = nomes.map(nome => nome.length);

console.log(iniciais);
console.log(comprimentos);