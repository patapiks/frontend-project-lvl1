import game from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// Вопрос/Ответ
const checkConditions = () => {
  const question = generateRandomNum(0, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game(ruleOfTheGame, checkConditions);
};
export default startGame;
