import game from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleOfTheGame = 'What is the result of the expression?';

// Функция арифметической операции, операнд которой получен из строки
const getArithmeticOperation = (num1, num2, oper) => {
  switch (oper) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      return num1 * num2;
  }
};

// Вопрос/Ответ
const checkConditions = () => {
  const operation = '+-*';
  const x = generateRandomNum(0, 100);
  const y = generateRandomNum(0, 100);
  const z = operation[generateRandomNum(0, operation.length)];
  const correctAnswer = String(getArithmeticOperation(x, y, z));
  const question = String(x + z + y);
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game(ruleOfTheGame, checkConditions);
};
export default startGame;
