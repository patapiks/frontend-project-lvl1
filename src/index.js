import readlineSync from 'readline-sync';

const play = (ruleGame, prepareCondition) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(ruleGame);
  for (let counter = 0; counter < roundsCount; counter += 1) {
    const [correctAnswer, question] = prepareCondition();
    console.log('Question: ', question);
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
