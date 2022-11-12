/**
 *  DEPENDENCY INVERSION (EXEMPLO EM TS)
 */

/* VIOLANDO O PRINCÍPIO DIP */

// class Carro {
//   motor: MotorVolks;
//   marca: string;
//   modelo: string;
//   constructor(marca: string, modelo: string) {
//     this.motor = new MotorVolks();
//     this.marca = marca;
//     this.modelo = modelo;
//   }

//   getInfo() {
//     console.log(`
//      marca: ${this.marca}
//      modelo: ${this.modelo}
//      motor: ${this.motor.getMotorInfo()}
//     `);
//   }
// }

// class MotorVolks {
//   tipo: string = "combustão interna";
//   cilindrada: string = "1.2";

//   getMotorInfo() {
//     return `Motor Volks - ${this.tipo} ${this.cilindrada}`
//   }
// }

// const carro = new Carro("Volks", "Up!");
// carro.getInfo();






/* EM CONFORMIDADE COM O PRINCÍPIO DIP */

class Carro {
  motor: IMotor;
  marca: string;
  modelo: string;
  constructor(marca: string, modelo: string, motor: IMotor) {
    this.motor = motor;
    this.marca = marca;
    this.modelo = modelo;
  }

  getInfo() {
    console.log(`
     marca: ${this.marca} 
     modelo: ${this.modelo}
     motor: ${this.motor.getMotorInfo()}
    `);
  }
}

interface IMotor {
  tipo: string;
  cilindrada: string;
  getMotorInfo(): string;
}

class MotorVolks implements IMotor {
  tipo: string = "combustão interna";
  cilindrada: string = "1.2";

  getMotorInfo() {
    return `Motor Volks - ${this.tipo} ${this.cilindrada}`;
  }
}

class MotorRenault implements IMotor {
  tipo: string = "outro";
  cilindrada: string = "1.0";

  getMotorInfo() {
    return `Motor Renault - ${this.tipo} ${this.cilindrada}`;
  }
}

const motorVolks = new MotorVolks();
const motorRenault = new MotorRenault();
const carro = new Carro("Volks", "Up!", motorVolks);
const carro2 = new Carro("Renault", "Logan", motorRenault);
carro.getInfo();
carro2.getInfo();
