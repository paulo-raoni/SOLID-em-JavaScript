
/* VIOLANDO O DESIGN PATTERN DEPENDENCY INJECTION */

// import Logger from "./Logger.mjs";

// export default class UserService {
//     logger = new Logger(); // instanciando o objeto (fora do padrão)
  
//     getAll() {
//       try {
//         this.logger.log("Buscando todos os usuários...");
//       } catch (error) {
//         this.logger.log(`Ocorreu um erro: ${error?.message}`);
//       }
//     }
// }




/* EM CONFORMIDADE COM O DESIGN PATTERN DEPENDENCY INJECTION */

export default class UserService {
  constructor(logger) { // injetando o objeto já instanciado
    this.logger = logger;
  }

  getAll() {
    try {
      this.logger.log("Buscando todos os usuários...");
    } catch (error) {
      this.logger.log(`Ocorreu um erro: ${error?.message}`);
    }
  }
}