import readlineSync from 'readline-sync';

let name;
let correctAnswer;

// Приветствие
export const greeting = (str) => {
  console.log('Welcome to the Brain Games!\n');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(str);
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

// Условия и проверка Игра №1 "Четный"
export const even = () => {
  let num;
  console.log('Question: ', num = Math.floor(Math.random() * Math.floor(100)));
  num % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
};

// Условия и проверка Игра №2 "Калькулятор"
export const calc = () => {
  const znak = '+-*';
  const x = Math.floor(Math.random() * Math.floor(10));
  const y = Math.floor(Math.random() * Math.floor(10));
  const z = znak[Math.floor(Math.random() * Math.floor(3))];
  correctAnswer = String(arifmOper(x, y, z));
  return console.log('Question: ', x, z, y);
};

// Условия и проверка Игра №3 "НОД"
export const nod = () => {
  let i = 1;
  const x = Math.floor(Math.random() * Math.floor(100));
  const y = Math.floor(Math.random() * Math.floor(100));

  while (i < x + 1) {
    if (x === 0 || y === 0) {
      correctAnswer = 1;
    }
    if (x % i === 0 && y % i === 0) {
      correctAnswer = i;
    }
    i += 1;
  }
  return console.log('Question: ', x, y);
};

// Общий игровой движок
export const game = (privetstvie, uslovie) => {
  let count = 0;

  privetstvie;
  while (count < 3) {
    uslovie();
    const answer = readlineSync.question('Your answer: ');
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
