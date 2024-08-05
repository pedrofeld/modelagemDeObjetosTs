"use strict";
/*
1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.
*/
class Contador {
    quantidade;
    constructor() {
        this.quantidade = 0;
    }
    zerar() {
        this.quantidade = 0;
    }
    incrementar() {
        this.quantidade += 1;
    }
    retornar() {
        return this.quantidade;
    }
}
const contador = new Contador();
console.log('Incremento');
contador.incrementar();
console.log(contador.retornar());
console.log('Zerar');
contador.zerar();
console.log(contador.retornar());
