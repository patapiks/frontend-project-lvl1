import game from '../index.js';

// Вопрос/Ответ
const prime = () => {
  const x = Math.floor(Math.random() * Math.floor(10));
  let correctAnswer = 'yes';

  if (x < 2) correctAnswer = 'no';
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) correctAnswer = 'no';
  }
  console.log(x);
  return correctAnswer;
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', prime);
};
export default startGame;
