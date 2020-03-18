import game from '../index.js';

// Вопрос/Ответ
const even = () => {
  let correctAnswer;
  let num;
  console.log(num = Math.floor(Math.random() * Math.floor(100)));
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else correctAnswer = 'no';
  return correctAnswer;
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game('Answer "yes" if the number is even, otherwise answer "no".', even);
};
export default startGame;
