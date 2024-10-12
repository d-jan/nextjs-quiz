'use client'
import { useState } from 'react';

type Question = {
  question: string; 
  options: string[];
  answer: string;
};

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    options:['Paris', 'London', 'Berlin', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerOptionClick = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResults(true);
    }
  }

  return (
    <div>
      { showResults ? (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2'>
          <h2 className='text-2xl text-black font-bold mb-4'>Your Score : {score}</h2>
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700' onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResults(false);
          }}>Restart Quiz</button>
        </div>
      ) : (
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>{questions[currentQuestionIndex].question}</h2>
          <div className='space-y-4'>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700' key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;