import generateRandomNum from '../generateRandomNum.js';
import play from '../index.js';

const ruleGame = 'What is the result of the expression?';

const calculate = (num1, num2, oper) => {
  switch (oper) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const prepareConditions = () => {
  const operations = '+-*';
  const num1 = generateRandomNum(0, 10);
  const num2 = generateRandomNum(0, 10);
  const randomOperation = operations[generateRandomNum(0, operations.length - 1)];
  const correctAnswer = String(calculate(num1, num2, randomOperation));
  const question = String(num1 + randomOperation + num2);
  return [correctAnswer, question];
};

const startGame = () => {
  play(ruleGame, prepareConditions);
};
export default startGame;
