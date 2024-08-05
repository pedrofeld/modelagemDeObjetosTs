"use strict";
/*
4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico.
*/
class Calculadora {
    historico;
    constructor() {
        this.historico = [];
    }
    soma(valor1, valor2) {
        const resultado = valor1 + valor2;
        this.adicionarHistorico(`${valor1} + ${valor2} = ${resultado}`);
        return resultado;
    }
    multiplicacao(valor1, valor2) {
        const resultado = valor1 * valor2;
        this.adicionarHistorico(`${valor1} * ${valor2} = ${resultado}`);
        return resultado;
    }
    divisao(valor1, valor2) {
        if (valor2 === 0) {
            this.adicionarHistorico(`Erro: (${valor1} / ${valor2})`);
            console.error("Não é possível fazer divisão por zero");
            return NaN;
        }
        const resultado = valor1 / valor2;
        this.adicionarHistorico(`${valor1} / ${valor2} = ${resultado}`);
        return resultado;
    }
    subtracao(valor1, valor2) {
        const resultado = valor1 - valor2;
        this.adicionarHistorico(`${valor1} - ${valor2} = ${resultado}`);
        return resultado;
    }
    adicionarHistorico(operacao) {
        this.historico.push(operacao);
    }
    visualizarHistorico() {
        return this.historico;
    }
}
const minhaCalculadora = new Calculadora();
console.log('Resultado da soma:', minhaCalculadora.soma(8, 2));
console.log('Resultado da multiplicação:', minhaCalculadora.multiplicacao(5, 2));
console.log('Resultado da divisão:', minhaCalculadora.divisao(20, 2));
console.log('Resultado da subtração:', minhaCalculadora.subtracao(12, 2));
console.log('Tentando dividir por zero:');
minhaCalculadora.divisao(10, 0);
console.log('Histórico:');
minhaCalculadora.visualizarHistorico().forEach(operacao => console.log(operacao));
