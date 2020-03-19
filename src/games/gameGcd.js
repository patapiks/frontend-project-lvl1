import game from '../index.js';

// Условия и проверка Игра №3 "НОД"
const gcd = () => {
  let i = 1;
  let correctAnswer;
  const x = Math.floor(Math.random() * Math.floor(10));
  const y = Math.floor(Math.random() * Math.floor(10));

  while (i < x + 1) {
    if (x === 0 || y === 0) {
      correctAnswer = 1;
    }
    if (x % i === 0 && y % i === 0) {
      correctAnswer = String(i);
    }
    i += 1;
  }
  const question = `${x} and ${y}`;
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game('Find the greatest common divisor of given numbers.', gcd);
};
export default startGame;
