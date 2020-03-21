import game from '../index.js';

// Функция арифметической операции, операнд которой получен из строки
const arifmOper = (num1, num2, oper) => {
  switch (oper) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      return num1 * num2;
  }
};

// Генерация случайного числа
const generateRandomNum = (range) => {
  const num = Math.floor(Math.random() * Math.floor(range));
  return num;
};

// Вопрос/Ответ
const calc = () => {
  const operation = '+-*';
  const x = generateRandomNum(100);
  const y = generateRandomNum(100);
  const z = operation[generateRandomNum(3)];
  const correctAnswer = String(arifmOper(x, y, z));
  const question = String(x + z + y);
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  const ruleOfTheGame = 'What is the result of the expression?';
  game(ruleOfTheGame, calc);
};
export default startGame;
