/*
6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.
d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.
Exemplo:
meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina()
*/

class Carro {
    public consumo: number;
    public quantidadeNoTanque: number;

    constructor(consumo: number, quantidadeNoTanque?: number) {
        this.consumo = consumo;
        this.quantidadeNoTanque = quantidadeNoTanque ?? 0;
    }
  
    andar(quilometrosAndados: number): void {
      const combustivelGasto = quilometrosAndados / this.consumo;
  
      if (combustivelGasto > this.quantidadeNoTanque) {
        console.log(`Combustível insuficiente para percorrer ${quilometrosAndados}km.`);
        return;
      }
  
      this.quantidadeNoTanque -= combustivelGasto;
      console.log(`Você percorreu ${quilometrosAndados} km e consumiu ${combustivelGasto.toFixed(2)}L de combustível.`);
    }
  
    obterGasolina(): number {
      return this.quantidadeNoTanque;
    }
  
    adicionarGasolina(quantidadeAbastecida: number): void {
      this.quantidadeNoTanque += quantidadeAbastecida;
      console.log(`Você adicionou ${quantidadeAbastecida}L de gasolina ao tanque.`);
    }
  }
  
const meuMustang = new Carro(8);
meuMustang.adicionarGasolina(100); 
meuMustang.andar(200); 
console.log(`Nível atual de combustível: ${meuMustang.obterGasolina().toFixed(2)}L`);
  