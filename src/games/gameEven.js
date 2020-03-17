import { game } from '../index.js';

// Условия игры
export const condition = () => {
    let correctAnswer;
    let num;
    console.log('Question: ', num = Math.floor(Math.random() * Math.floor(100)));
    if (num % 2 === 0) {
       return correctAnswer = 'yes';
    } else return correctAnswer = 'no';
};

// Функция запуска движка с аргументом приветсвия
export const gameEven = () => {
    game('Answer "yes" if the number is even, otherwise answer "no".');
};