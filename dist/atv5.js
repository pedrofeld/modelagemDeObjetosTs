"use strict";
/*
5. Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro
iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.
*/
class BombaCombustivel {
    tipoCombustivel;
    valorLitro;
    quantidadeCombustivel;
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    abastecerPorValor(totalAPagar) {
        const litros = totalAPagar / this.valorLitro;
        if (litros > this.quantidadeCombustivel) {
            console.log(`Quantidade insuficiente de combustível. A bomba possui apenas ${this.quantidadeCombustivel}L.`);
            return;
        }
        this.quantidadeCombustivel -= litros;
        console.log(`Você abasteceu ${litros.toFixed(2)}L e sobrou ${this.quantidadeCombustivel.toFixed(2)}L na bomba.`);
    }
    abastecerPorLitro(totalDeCombustivelAbastecido) {
        if (totalDeCombustivelAbastecido > this.quantidadeCombustivel) {
            console.log(`Quantidade insuficiente de combustível. A bomba possui apenas ${this.quantidadeCombustivel}L.`);
            return;
        }
        const valorAPagar = totalDeCombustivelAbastecido * this.valorLitro;
        this.quantidadeCombustivel -= totalDeCombustivelAbastecido;
        console.log(`Você pagará R$ ${valorAPagar.toFixed(2)} e sobrou ${this.quantidadeCombustivel.toFixed(2)}L na bomba.`);
    }
    alterarValor(novoValor) {
        this.valorLitro = novoValor;
        console.log(`Novo valor do litro: R$ ${this.valorLitro.toFixed(2)}`);
    }
    alterarCombustivel(novoCombustivel) {
        this.tipoCombustivel = novoCombustivel;
        console.log(`Novo tipo de combustível: ${this.tipoCombustivel}`);
    }
    alterarQuantidadeCombustivel(novaQuantidade) {
        this.quantidadeCombustivel = novaQuantidade;
        console.log(`Nova quantidade de combustível na bomba: ${this.quantidadeCombustivel.toFixed(2)}L`);
    }
}
const minhaBomba = new BombaCombustivel('Gasolina', 5.60, 100);
minhaBomba.abastecerPorValor(28);
minhaBomba.abastecerPorLitro(5);
minhaBomba.abastecerPorLitro(200);
minhaBomba.alterarValor(6.00);
minhaBomba.alterarCombustivel('Etanol');
minhaBomba.alterarQuantidadeCombustivel(150);
