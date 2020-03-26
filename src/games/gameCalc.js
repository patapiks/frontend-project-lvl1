import generateRandomNum from '../generateRandomNum.js';
import play from '../index.js';

const ruleGame = 'What is the result of the expression?';

// Функция арифметической операции, операнд которой получен из строки
const calculationOperation = (num1, num2, oper) => {
  switch (oper) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return 'errore';
  }
};

// Вопрос/Ответ
const prepareConditions = () => {
  const operations = '+-*';
  const num1 = generateRandomNum(0, 100);
  const num2 = generateRandomNum(0, 100);
  const randomOperation = operations[generateRandomNum(0, operations.length - 1)];
  const correctAnswer = String(calculationOperation(num1, num2, randomOperation));
  const question = String(num1 + randomOperation + num2);
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  play(ruleGame, prepareConditions);
};
export default startGame;
