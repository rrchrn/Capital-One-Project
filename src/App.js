import './App.css';
import React, { useState } from 'react';
import Question from './Question';
import image from './images/C1Logo.png'


function App() {

  //keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const currentQuestion = Question[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
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
        
        <div className='question-section'>
          <div className='question-count'>
            <span>{`Question ${currentQuestionIndex + 1}/${Question.length}`}</span>
          </div>
          <div className='question-text'>{currentQuestion.question}</div>
         <div className='is-correct'>
            {isAnswerCorrect !== null && (
              <span>{isAnswerCorrect ? "Correct" : "Incorrect"}</span>
            )}
          </div>
        </div>
        <div className='answer-section'>
          {currentQuestion.answers.map((answer, index) => (
            <button 
              className={`Button ${isAnswerCorrect !== null && answer.isCorrect ? 'correct' : ''} ${isAnswerCorrect === false && !answer.isCorrect ? 'incorrect' : ''}`}
              key={index}
              onClick={() => handleAnswerClick(answer.isCorrect)}
              disabled={isAnswerCorrect !== null}
            >
              {answer.text}
            </button>
          ))}
        </div>
        {isAnswerCorrect !== null && currentQuestionIndex < Question.length - 1 && (
          <button className= 'next-question' onClick={handleNextQuestion}>Next Question</button>
        )}
      </header>
    </div>
  );
  

  
}

export default App;
