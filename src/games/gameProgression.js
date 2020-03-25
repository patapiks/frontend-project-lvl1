import game from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';

// Вопрос/Ответ
const checkConditions = () => {
  const list = [];
  const progressionLength = 5;
  const addition = generateRandomNum(0, 10);
  const position = generateRandomNum(0, progressionLength);
  const startProgression = generateRandomNum(0, 10);
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
  game(ruleOfTheGame, checkConditions);
};
export default startGame;
