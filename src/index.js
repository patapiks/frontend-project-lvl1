import readlineSync from 'readline-sync';

export const greeting = (str) => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(str);
};

export const gameEven = () => {
  let count = 0;
  let num;
  let correctAnswer;

  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    console.log('Question: ', num = Math.floor(Math.random() * Math.floor(100)));
    const answer = readlineSync.question('Your answer: ');
    num % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
      continue;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return console.log(`Let's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};

// Генерация рандомного числа
const random = (num) => {
  const x = Math.floor(Math.random() * Math.floor(num));
  return x;
};

// Функция арифметической операции, операнд которой получен из строки
const arifmOper = (num1, num2, oper) => {
  if (oper === '-') {
    return num1 - num2;
  }
  if (oper === '+') {
    return num1 + num2;
  }
  return num1 * num2;
};

export const gameCalc = () => {
  let count = 0;
  let correctAnswer;
  const str = '+-*';
  let num1;
  let num2;
  let x;

  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  while (count < 3) {
    console.log('Question: ', num1 = random(10), x = str[random(3)], num2 = random(10));
    const answer = readlineSync.question('Your answer: ');
    correctAnswer = String(arifmOper(num1, num2, x));
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
      continue;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    return console.log(`Let's try again, ${name}!`);
  }
  return console.log(`Congratulations, ${name}!`);
};
