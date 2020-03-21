import game from '../index.js';

// Генерация случайного числа
const generateRandomNum = (range) => {
  const num = Math.floor(Math.random() * Math.floor(range));
  return num;
};

// Вопрос/Ответ
const even = () => {
  const question = generateRandomNum(100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(ruleOfTheGame, even);
};
export default startGame;
