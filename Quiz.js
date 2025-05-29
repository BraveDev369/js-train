const quiz = [
  {
    question: "What is the capital of Iran?",
    answer: "Tehran",
  },
  {
    question: "Which programming language is used for web development?",
    answer: "JavaScript",
  },
  {
    question: "Which is the largest continent in the world?",
    answer: "Asia",
  },
  {
    question: "At what temperature does water freeze?",
    answer: "0",
  },
  {
    question: "What is the first planet in the solar system?",
    answer: "Mercury",
  },
];

let score = 0;
quiz.forEach((q) => {
  const answer = prompt(q.question);
  if (answer.toLowerCase() === q.answer.toLowerCase()) {
    console.log("Your Anser is Correct :)");
    score += 1;
  } else {
    console.log("Your answer in incorrect :(");
  }
});

console.log("Your score : ", score);
