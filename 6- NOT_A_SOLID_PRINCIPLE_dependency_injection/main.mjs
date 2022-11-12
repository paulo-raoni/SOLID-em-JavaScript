/**
 *  DEPENDENCY INJECTION (EXEMPLO EM JS)
 */

/* VIOLANDO O DESIGN PATTERN DEPENDENCY INJECTION */

// import UserService from "./UserService.mjs";
// const userService = new UserService();
// userService.getAll();



/* EM CONFORMIDADE COM O DESIGN PATTERN DEPENDENCY INJECTION */
import UserService from "./UserService.mjs";
import Logger from "./Logger.mjs";

const logger = new Logger();
const userService = new UserService(logger);
userService.getAll();