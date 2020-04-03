import play from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let temp = num;
  if (temp < 2) return false;
  for (let i = 2; i < temp; i += 1) {
    if (temp % i === 0) return false;
    temp /= 2;
  }
  return true;
};

const prepareConditions = () => {
  const question = generateRandomNum(0, 10);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const startGame = () => {
  play(gameRule, prepareConditions);
};
export default startGame;
