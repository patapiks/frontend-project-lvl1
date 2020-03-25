import game from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';

// Вычисление НОД
const nod = (num1, num2) => {
  const result = num1 ? nod(num2 % num1, num1) : num2;
  return result;
};


// Условия и проверка Игра №3 "НОД"
const checkConditions = () => {
  const x = generateRandomNum(0, 10);
  const y = generateRandomNum(0, 10);

  const correctAnswer = String(nod(x, y));
  const question = `${x} and ${y}`;
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game(ruleOfTheGame, checkConditions);
};
export default startGame;
