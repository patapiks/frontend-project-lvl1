import game from '../index.js';

// Генерация случайного числа
const generateRandomNum = (range) => {
  const num = Math.floor(Math.random() * Math.floor(range));
  return num;
};

const checkPrime = (num) => {
  let correctAnswer = 'yes';
  if (num < 2) correctAnswer = 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) correctAnswer = 'no';
  }
  return correctAnswer;
};

// Вопрос/Ответ
const prime = () => {
  const question = generateRandomNum(10);
  const correctAnswer = checkPrime(question);
  return [correctAnswer, question];
};

// Функция запуска движка с аргументом приветсвия и условием игры
const startGame = () => {
  const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(ruleOfTheGame, prime);
};
export default startGame;
