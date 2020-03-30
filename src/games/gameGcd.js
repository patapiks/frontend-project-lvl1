import play from '../index.js';
import generateRandomNum from '../generateRandomNum.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  const result = num1 ? findGcd(num2 % num1, num1) : num2;
  return result;
};

const prepareConditions = () => {
  const num1 = generateRandomNum(0, 10);
  const num2 = generateRandomNum(0, 10);

  const correctAnswer = String(findGcd(num1, num2));
  const question = `${num1} and ${num2}`;
  return [correctAnswer, question];
};

const startGame = () => {
  play(ruleGame, prepareConditions);
};
export default startGame;
