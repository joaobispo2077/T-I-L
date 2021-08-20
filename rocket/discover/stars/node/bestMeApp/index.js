
const questions = [
  'What I learn today?',
  'What let me sad??',
];

const showMessageInList = (list, index = 0) => {
  process.stdout.write(list[index] + '\n\n\n');
}

showMessageInList(questions);

const answers = [];

process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    showMessageInList(questions, answers.length);
  } else {
    process.stdout.write('--------------------------------');
    process.stdout.write('You got the result:' + '\n\n\n');
    answers.forEach((_, index) => {
      showMessageInList(questions, index);
      showMessageInList(answers, index);
    })
    process.exit();
  }

});
