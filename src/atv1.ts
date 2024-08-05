/*
1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador.
*/

class Contador {
    public quantidade: number;

    constructor(){
        this.quantidade = 0;
    }

    public zerar(): void{
        this.quantidade = 0;
    }

    public incrementar(): void{
        this.quantidade += 1;
    }

    public retornar(): number{
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