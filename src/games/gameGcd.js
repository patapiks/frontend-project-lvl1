import play from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

// Вычисление НОД
const gcd = (num1, num2) => {
  const result = num1 ? gcd(num2 % num1, num1) : num2;
  return result;
};


// Условия и проверка Игра №3 "НОД"
const prepareConditions = () => {
  const num1 = generateRandomNum(0, 10);
  const num2 = generateRandomNum(0, 10);

  const correctAnswer = String(gcd(num1, num2));
  const question = `${num1} and ${num2}`;
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  play(ruleGame, prepareConditions);
};
export default startGame;
