//  Symbol and Generator

//  Não pode ser invocado utilizando New
//  Posso adicionar metapropriedades em um Symbol
const uniqueID = Symbol('Hello');
//  a palavra Hello é para debug somente
//const uniqueID2 = Symbol('Hello');
//  a palavra Hello é para debug somente

//console.log(uniqueID === uniqueID2);

//  comparando os dois symbols com a mesma string identificadora.

//Symbol é utilizado para identificar itens, não ser acessado se não for intencionalmente.

const obj = {
    [uniqueID]:'Hello'
}

console.log(obj);

Object.keys(obj);
//  listar chaves do meu objeto

Object.getOwnPropertySymbols(obj);
// listar chaves em formato Symbol específicas do meu objeto

//  Symbols possuem uma série de propriedades denominadas Well Known Symbols

const arr = [1, 2, 3, 4];

//percorrendo o array por um while
const it = arr[Symbol.iterator]();

console.log("Percorrendo Array por While:")
while (true) {
    let {value, done} = it.next();
    
    if(done) {
        break;
    }

    console.log(value);
   
}

//percorrendo o array por for of (nativo do JS)

console.log("Percorrendo Array por For of:")

for (let value of arr) {
    console.log(value);
}

//Symbol and Generator


