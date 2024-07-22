import * as readline from 'readline-sync';
import { Operation } from "./types";

// Función de la calculadora
const Calculator = (number1: number, number2: number, operacion: Operation): number | void => {
    switch (operacion) {
        case "Division":
            return number1 / number2;
        case "Multiplicacion":
            return number1 * number2;
        case "Resta":
            return number1 - number2;
        case "Suma":
            return number1 + number2;
        default:
            console.log("Operación no válida");
            break;
    }
};

const getUserInput = (): [number, number, Operation] => {
    const num1 = parseFloat(readline.question("Ingresa el primer numero: "));
    const num2 = parseFloat(readline.question("Ingresa el segundo numero: "));
    const operation = readline.question("Ingresa la operacion (Division, Multiplicacion, Resta, Suma): ") as Operation;
    return [num1, num2, operation];
};

const [number1, number2, operacion] = getUserInput();

const result = Calculator(number1, number2, operacion);

if (result !== undefined) {
    console.log("Resultado:", result);
}
