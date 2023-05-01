/**
 *  PRINCÍPIO DA SUBSTITUIÇÃO DE LISKOVI (EXEMPLOS EM JS)
 */

/****************************** EXEMPLO 1 ******************************/

/* VIOLANDO O PRINCÍPIO LSP */

// class Retangulo {
//   constructor(altura, largura) {
//     this.altura = altura;
//     this.largura = largura;
//   }
//   setLargura(largura) {
//     this.largura = largura;
//   }
//   setAltura(altura) {
//     this.altura = altura;
//   }
//   area() {
//     return this.altura * this.largura;
//   }
// }

// class Quadrado extends Retangulo {
//   constructor(altura) {
//     super(altura, altura)
//   }
//   setLargura(largura) {
//     this.altura = altura;
//     this.largura = largura;
//   }
//   setAltura(altura) {
//     this.altura = altura;
//     this.largura = largura;
//   }
// }

// const retangulo = new Retangulo(5, 4);
// console.log(Retangulo.area());

// const quadrado = new Retangulo(5, 5);
// console.log(quadrado.area());
// quadrado.setAltura(6);
// console.log(quadrado.area());

/* EM CONFORMIDADE COM O PRINCÍPIO LSP */

class Forma {
  area() {}
}

class Retangulo extends Forma {
  constructor(altura, largura) {
    super();
    this.altura = altura;
    this.largura = largura;
  }
  setLargura(largura) {
    this.largura = largura;
  }
  setAltura(altura) {
    this.altura = altura;
  }
  area() {
    return this.altura * this.largura;
  }
}

class Quadrado extends Forma {
  constructor(altura) {
    super();
    this.lado = altura;
  }
  setLargura(largura) {
    this.lado = largura;
  }
  setAltura(altura) {
    this.lado = altura;
  }
  area() {
    return this.lado ** 2;
  }
}

const retangulo = new Retangulo(5, 4);
console.log(retangulo.area());

const quadrado = new Quadrado(5, 5);
console.log(quadrado.area());
quadrado.setAltura(6);
console.log(quadrado.area());

/****************************** EXEMPLO 1 ******************************/

/* 
-------------------------------------------------
*/

/****************************** EXEMPLO 2 ******************************/

/* VIOLANDO O PRINCÍPIO LSP */

// class Ave {
//   voar() {
//     console.log("Posso voar");
//   }
// }

// class Pato extends Ave {
//   barulhoDePato() {
//     console.log("Quack Quack");
//   }
// }

// class Pinguim extends Ave {
//   voar() {
//     console.log("Posso voar");
//   }
//   nadar() {
//     console.log("Posso nadar");
//   }
//   barulhoDePinguim() {
//     console.log("Raaa Raaa");
//   }
// }

// function fazerAveVoar(ave) {
//   ave.voar();
// }

// const pato = new Pato();
// const pinguim = new Pinguim();

// fazerAveVoar(pato);
// fazerAveVoar(pinguim);



/* EM CONFORMIDADE COM O PRINCÍPIO LSP */
class AveQueVoa {
  voar() {
    console.log("Posso voar");
  }
}

class AveQueNada {
  nadar() {
    console.log("Posso nadar");
  }
}

class Pato extends AveQueVoa {
  barulhoDePato() {
    console.log("Quack Quack");
  }
}

class Pinguim extends AveQueNada {
  bargulhoDePiguim() {
    console.log("Raaa Raaa");
  }
}

function fazerAveVoar(ave) {
  ave.voar();
}
function fazerAveNadar(ave) {
  ave.nadar();
}

const pato = new AveQueVoa();
const pinguim = new AveQueNada();

fazerAveVoar(pato);
fazerAveNadar(pinguim);

/****************************** EXEMPLO 2 ******************************/
