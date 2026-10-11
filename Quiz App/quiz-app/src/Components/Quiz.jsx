import React from "react";
import { useState } from "react";

const questions = [
  {
    question: "What is React?",
    options: ["HTML", "CSS", "React", "Python"],
    answer: "React",
  },
  {
    question: "What is JSX?",
    options: ["JavaScript XML", "Java", "CSS", "Python"],
    answer: "JavaScript XML",
  },
  {
    question: "Which language is used with React?",
    options: ["JavaScript", "Python", "C++", "PHP"],
    answer: "JavaScript",
  },
  {
    question: "What is used to create a component in React?",
    options: ["Function", "Loop", "Array", "Database"],
    answer: "Function",
  },
  {
    question: "Which hook is used to manage state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>

      {quizCompleted ? (
        <div className="result">
          <h2>Quiz Completed! 🎉</h2>

          <h3>
            Your Score: {score} / {questions.length}
          </h3>

          <button className="restart-btn" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <p>
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h2>{questions[currentQuestion].question}</h2>

          {questions[currentQuestion].options.map((option) => (
            <button
              className={`option-btn ${
                selectedAnswer === option ? "selected" : ""
              }`}
              key={option}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}

          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;