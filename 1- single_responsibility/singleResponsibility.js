/* GERAR CLIMA */
const CLIMA_PROIBIR_USO = [
  "furacao", 
  "ciclone", 
  "diluvio", 
  "vulcao em erupcao"
];

const LISTA_CLIMA = [
  "ensolarado", 
  "chuvoso", 
  "nublado", 
  "parcialmente nublado", 
  "neve", 
  "granizo",
  ...CLIMA_PROIBIR_USO
];

const CLIMA_HOJE = LISTA_CLIMA[Math.floor(Math.random()*LISTA_CLIMA.length)];

/* GERAR CLIMA */




/**
 *  SINGLE RESPONSIBILITY (EXEMPLO EM JS)
 */


/* VIOLANDO O PRINCÍPIO SRP */

// class Carro {
//   constructor(modelo, km) {
//     this.modelo = modelo;
//     this.km = km;
//   }

//   movimentar(distanciaKm) {
//     if( CLIMA_PROIBIR_USO.find(clima => clima === CLIMA_HOJE) ) {
//       this.logarErro(`Esse carro ${this.modelo} não pode andar devido ao clima: ${CLIMA_HOJE}`);
//       return;
//     }
//     this.km += distanciaKm;
//     this.logMovimento(this.modelo);
//   }

//   logarMovimento() {
//     console.log(`O carro ${this.modelo} está andando.`);
//   }

//   logarErro(mensagem) {
//     console.erro(mensagem);
//   }
// }

// const carro1 = new Carro("Ferrari", 0);
// carro1.movimentar(1);
// console.log('fim');



/* EM CONFORMIDADE COM O PRINCÍPIO SRP */

class LogaMovimento {
  static logMovimento(modelo) {
    console.log(`O carro ${modelo} está andando.`);
  }
}


class LogaErro {
  static logErro(mensagem) {
    console.error(mensagem);
  }
}

class Carro {
  constructor(modelo, km) {
    this.modelo = modelo;
    this.km = km;
  }

  movimentar(distanciaKm) {
    if( CLIMA_PROIBIR_USO.find(clima => clima === CLIMA_HOJE) ) {
      LogaErro.logErro(`Esse carro ${this.modelo} não pode andar devido ao clima: ${CLIMA_HOJE}`);
      return;
    }
    this.km += distanciaKm;
    LogaMovimento.logMovimento(this.modelo);
  }
}


const carro1 = new Carro("Ferrari", 0);
carro1.movimentar(1);
console.log('fim');

