import play from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let numTemp = num;
  if (numTemp < 2) return false;
  for (let i = 2; i < numTemp; i += 1) {
    if (numTemp % i === 0) return false;
    numTemp /= 2;
  }
  return true;
};

// Вопрос/Ответ
const prepareConditions = () => {
  const question = generateRandomNum(0, 10);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  play(ruleGame, prepareConditions);
};
export default startGame;
