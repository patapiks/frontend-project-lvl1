import game from '../index.js';

// Вопрос/Ответ
const progression = () => {
  const list = [];
  const addition = Math.floor(Math.random() * Math.floor(10));
  const position = Math.floor(Math.random() * Math.floor(10));
  let result = 0;
  for (let i = 0; i < 10; i += 1) {
    result += addition;
    list.push(result);
  }
  const correctAnswer = String(list[position]);
  list[position] = '..';
  const question = list.join(' ');
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game('Find the greatest common divisor of given numbers.', progression);
};
export default startGame;
