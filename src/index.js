import readlineSync from 'readline-sync';
import { condition } from './games/gameEven.js'

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

//* Условия и проверка Игра №1 "Четный"
/*
export const even = () => {
  let num;
  console.log('Question: ', num = Math.floor(Math.random() * Math.floor(100)));
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  // num % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no'; -- Ругается линтер
};
*/

// Условия и проверка Игра №2 "Калькулятор"
export const calc = () => {
  const operation = '+-*';
  const x = Math.floor(Math.random() * Math.floor(10));
  const y = Math.floor(Math.random() * Math.floor(10));
  const z = operation[Math.floor(Math.random() * Math.floor(3))];
  correctAnswer = String(arifmOper(x, y, z));
  return console.log('Question: ', x, z, y);
};

// Условия и проверка Игра №3 "НОД"
export const gcd = () => {
  let i = 1;
  const x = Math.floor(Math.random() * Math.floor(10));
  const y = Math.floor(Math.random() * Math.floor(10));

  while (i < x + 1) {
    if (x === 0 || y === 0) {
      correctAnswer = 1;
    }
    if (x % i === 0 && y % i === 0) {
      correctAnswer = String(i);
    }
    i += 1;
  }
  return console.log('Question: ', x, y);
};

// Условия и проверка Игра №4 "Арифметическая прогрессия"
export const progression = () => {
  const list = [];
  const addition = Math.floor(Math.random() * Math.floor(10));
  const position = Math.floor(Math.random() * Math.floor(10));
  let result = 0;

  for (let i = 0; i < 10; i += 1) {
    result += addition;
    list.push(result);
  }
  correctAnswer = String(list[position]);
  list[position] = '..';
  return console.log(list.join(' '));
};

// Условия и проверка Игра №5 "Простое ли число?"
export const prime = () => {
  const x = Math.floor(Math.random() * Math.floor(10));
  correctAnswer = 'yes';

  if (x < 2) {
    correctAnswer = 'no';
  }
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      correctAnswer = 'no';
    }
  }
  return console.log(x);
};

// Общий игровой движок
export const game = (str) => {
  let count = 0;

  greeting(str);
  while (count < 3) {
    let correctAnswer = condition();
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
