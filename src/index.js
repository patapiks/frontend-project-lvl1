import readlineSync from 'readline-sync';

// Общий игровой движок
const game = (str, condition) => {
  const rounds = 3;

  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(str);
  for (let count = 0; count < rounds; count += 1) {
    const getCondition = condition();
    console.log('Question: ', getCondition[1]);
    const correctAnswer = getCondition[0];
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default game;
