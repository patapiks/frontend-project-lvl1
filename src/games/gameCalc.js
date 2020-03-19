import game from '../index.js';

// Функция арифметической операции, операнд которой получен из строки
const arifmOper = (num1, num2, oper) => {
  if (oper === '-') return num1 - num2;
  if (oper === '+') return num1 + num2;
  return num1 * num2;
};

// Вопрос/Ответ
const calc = () => {
  const operation = '+-*';
  const x = Math.floor(Math.random() * Math.floor(10));
  const y = Math.floor(Math.random() * Math.floor(10));
  const z = operation[Math.floor(Math.random() * Math.floor(3))];
  const correctAnswer = String(arifmOper(x, y, z));
  const question = String(x + z + y);
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game('What is the result of the expression?', calc);
};
export default startGame;
