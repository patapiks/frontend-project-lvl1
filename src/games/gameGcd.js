import game from '../index.js';

// Генерация случайного числа
const generateRandomNum = (range) => {
  const num = Math.floor(Math.random() * Math.floor(range));
  return num;
};

const nod = (x, y) => {
  let i = 1;
  let nodValue;
  if (x === 0 || y === 0) {
    nodValue = '1';
    return nodValue;
  }
  while (i < x + 1) {
    if (x % i === 0 && y % i === 0) {
      nodValue = String(i);
    }
    i += 1;
  }
  return nodValue;
};

// Условия и проверка Игра №3 "НОД"
const gcd = () => {
  const x = generateRandomNum(10);
  const y = generateRandomNum(10);

  const correctAnswer = nod(x, y);
  const question = `${x} and ${y}`;
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';
  game(ruleOfTheGame, gcd);
};
export default startGame;
