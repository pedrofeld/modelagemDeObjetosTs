"use strict";
/*
2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor
*/
class Bola {
    cor;
    circunferencia;
    material;
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(novaCor) {
        this.cor = novaCor;
    }
    mostrarCor() {
        return this.cor;
    }
}
const minhaBola = new Bola("prata", 10, "metal");
console.log('Cor inicialmente: ' + minhaBola.mostrarCor());
minhaBola.trocarCor("branco");
console.log('Nova cor: ' + minhaBola.mostrarCor());
