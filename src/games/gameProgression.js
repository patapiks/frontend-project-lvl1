import game from '../index.js';

// Генерация случайного числа
const generateRandomNum = (range) => {
  const num = Math.floor(Math.random() * Math.floor(range));
  return num;
};

// Вопрос/Ответ
const progression = () => {
  const list = [];
  const addition = generateRandomNum(10);
  const position = generateRandomNum(10);
  const startProgression = generateRandomNum(10);
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    list.push(startProgression + addition * i);
  }
  // const correctAnswer = String(list[position]);
  const correctAnswer = String(startProgression + addition * position);
  list[position] = '..';
  const question = list.join(' ');
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';
  game(ruleOfTheGame, progression);
};
export default startGame;
