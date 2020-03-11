import readlineSync from 'readline-sync';

const whatYourName = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};

export const game = () => {
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

export default whatYourName;
