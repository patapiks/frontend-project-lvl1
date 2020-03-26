import readlineSync from 'readline-sync';

// Общий игровой движок
const play = (ruleOfTheGame, prepareCondition) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(ruleOfTheGame);
  for (let counter = 0; counter < roundsCount; counter += 1) {
    // const condition = prepareCondition();
    const [value, condition] = prepareCondition();
    console.log('Question: ', condition);
    const correctAnswer = value;
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default play;
