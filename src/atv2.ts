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
    public cor: string;
    public circunferencia: number;
    public material: string;
  
    constructor(cor: string, circunferencia: number, material: string) {
      this.cor = cor;
      this.circunferencia = circunferencia;
      this.material = material;
    }
  
    trocarCor(novaCor: string): void {
      this.cor = novaCor;
    }

    mostrarCor(): string {
      return this.cor;
    }
}

const minhaBola = new Bola("prata", 10, "metal");
console.log('Cor inicialmente: ' + minhaBola.mostrarCor());
  
minhaBola.trocarCor("branco");
console.log('Nova cor: ' + minhaBola.mostrarCor());