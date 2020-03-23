import game from '../index.js';

// Генерация случайного числа
const generateRandomNum = (range) => {
  const num = Math.floor(Math.random() * Math.floor(range));
  return num;
};

// Вычисление НОД
const nod = (x, y) => {
  const result = x ? nod(y % x, x) : y;
  return result;
};


// Условия и проверка Игра №3 "НОД"
const gcd = () => {
  const x = generateRandomNum(10);
  const y = generateRandomNum(10);

  const correctAnswer = String(nod(x, y));
  const question = `${x} and ${y}`;
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';
  game(ruleOfTheGame, gcd);
};
export default startGame;
