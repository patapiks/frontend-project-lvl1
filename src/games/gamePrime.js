import game from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let correctAnswer = true;
  if (num < 2) correctAnswer = false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) correctAnswer = false;
  }
  return correctAnswer;
};

// Вопрос/Ответ
const checkConditions = () => {
  const question = generateRandomNum(0, 10);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  game(ruleOfTheGame, checkConditions);
};
export default startGame;
