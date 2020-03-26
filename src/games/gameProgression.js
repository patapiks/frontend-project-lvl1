import play from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

// Вопрос/Ответ
const prepareConditions = () => {
  const progression = [];
  const progressionLength = 5;
  const increment = generateRandomNum(0, 10);
  const positionHiddenNumber = generateRandomNum(0, progressionLength);
  const startElement = generateRandomNum(0, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startElement + increment * i);
  }
  const correctAnswer = String(startElement + increment * positionHiddenNumber);
  progression[positionHiddenNumber] = '..';
  const question = progression.join(' ');
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  play(ruleGame, prepareConditions);
};
export default startGame;
