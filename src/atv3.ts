/*
3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo.
*/

class ContaCorrente{
    private numeroDaConta: number;
    private nomeDoCorrentista: string;
    private saldo: number;

    constructor(numeroDaConta: number, nomeDoCorrentista: string, saldo?: number){
        this.numeroDaConta = numeroDaConta;
        this.nomeDoCorrentista = nomeDoCorrentista;
        this.saldo = 0;
    }

    alterarNome(novoNome: string): void {
        this.nomeDoCorrentista = novoNome;
    }

    deposito(valorPositivo: number): void {
        if (valorPositivo > 0) {
          this.saldo += valorPositivo;
        } else {
          console.log("O valor do depósito deve ser positivo.");
        }
    }
    
    saque(valor: number): void {
        if (this.saldo >= valor) {
          this.saldo -= valor;
        } else {
          console.log("Saldo insuficiente");
        }
    }

    mostrarSaldo(): number {
        return this.saldo;
    }

    mostrarNome(): string {
        return this.nomeDoCorrentista;
    }
}

const minhaConta = new ContaCorrente(1, "Pedro", 1000000);
console.log('Olá ' + minhaConta.mostrarNome());
console.log('Saldo inicial: ' + minhaConta.mostrarSaldo());

minhaConta.deposito(50000);
console.log('Saldo após o depósito: ' + minhaConta.mostrarSaldo()); 

minhaConta.saque(25000);
console.log('Saldo após o saque: ' + minhaConta.mostrarSaldo());

console.log('Tentativa de saque superior ao saldo:');
minhaConta.saque(10000000000);

minhaConta.alterarNome("Pedro Feld");
console.log('Novo nome: ' + minhaConta.mostrarNome());
