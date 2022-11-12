/**
 *  OPEN/CLOSED PRINCIPLE (EXEMPLO EM JS)
 */

/* VIOLANDO O PRINCÍPIO OCP*/
// class Transporte {
//   constructor(transportador, volume) {
//     this.transportador = transportador;
//     this.volume = volume;
//   }

//   calculaPreco() {
//     if (this.transportador === "Caminhao") {
//       return 500 * this.volume;
//     } else if (this.transportador === "Navio") {
//       return 300 * this.volume;
//     } else if (this.transportador === "Aviao") {
//       return 1000 * this.volume;
//     }
//   }
// }

// const transporte1 = new Transporte("Caminhao", 10);
// const transporte2 = new Transporte("Navio", 10);
// const transporte3 = new Transporte("Aviao", 10);
// console.log(transporte1.calculaPreco()); //5000
// console.log(transporte2.calculaPreco()); //3000
// console.log(transporte3.calculaPreco()); //10000



/* EM CONFORMIDADE COM O PRINCÍPIO OCP */
class Transporte {
  constructor(transportador, volume) {
    this.transportador = transportador;
    this.volume = volume;
  }

  getMultiplicador() {
    return 1;
  }

  calculaPreco() {
    return this.getMultiplicador() * this.volume;
  }
}

class Navio extends Transporte{
  constructor(volume) {
    super("Navio", volume);
  }
  getMultiplicador() {
    return 300;
  }
}

class Caminhao extends Transporte{
  constructor(volume) {
    super("Caminhao", volume);
  }
  getMultiplicador() {
    return 500;
  }
}

class Aviao extends Transporte{
  constructor(volume) {
    super("Aviao", volume)
  }
  getMultiplicador() {
    return 1000;
  }
}

const navio = new Navio(10);
const caminhao = new Caminhao(10);
const aviao = new Aviao(10);
console.log(navio.calculaPreco()); //5000
console.log(caminhao.calculaPreco()); //3000
console.log(aviao.calculaPreco()); //10000


