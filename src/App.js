import "./App.css";
import React, { useState } from "react";
import Question from "./Question";
import image from "./images/C1Logo.png";

function App() {
  //keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const currentQuestion = Question[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) {
      setScore(score + 10);
    }
  };

  //clicking the next question
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setIsAnswerCorrect(null); // Reset the isAnswerCorrect state
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <div className="Title">Financial One Literacy</div>
        <div className="score-section">
          <span>Score: {score}</span>
        </div>
        <div className="question-section">
          <div className="question-count">
            <span>{`Question ${currentQuestionIndex + 1}/${
              Question.length
            }`}</span>
          </div>
          <div className="question-text">{currentQuestion.question}</div>
          <div className="is-correct">
            {isAnswerCorrect !== null && (
              <span>
                {isAnswerCorrect ? (
                  <h2>Correct</h2>
                ) : (
                  <>
                    <p className="largeText">Incorrect</p>
                    <p className="mediumText">The correct answer is:</p>
                    <p className="smallText">
                      {currentQuestion.answers.map((answer, index) => (
                        <>{answer.isCorrect && answer.text}</>
                      ))}
                    </p>
                  </>
                )}
              </span>
            )}
          </div>
        </div>
        <div className="answer-section">
          {currentQuestion.answers.map((answer, index) => (
            <button
              className={`${
                isAnswerCorrect !== null && answer.isCorrect
                  ? "correct"
                  : "incorrect"
              } Button`}
              key={index}
              onClick={() => handleAnswerClick(answer.isCorrect)}
              disabled={isAnswerCorrect !== null}
            >
              {answer.text}
            </button>
          ))}
        </div>
        {isAnswerCorrect !== null &&
          currentQuestionIndex < Question.length - 1 && (
            <button className="next-question" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
      </header>
    </div>
  );
}

export default App;
