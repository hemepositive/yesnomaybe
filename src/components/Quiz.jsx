import { useState } from 'react';

const questions = [
  "The human brain is fully developed by age 25.",
  "Coffee is the world's second most traded commodity after oil.",
  "Goldfish have a memory span of only three seconds.",
  "The Great Wall of China is visible from space.",
  "Humans can distinguish between over one trillion different smells.",
  "Lightning never strikes the same place twice.",
  "Glass is a slow-moving liquid.",
  "Different parts of your tongue detect different tastes.",
  "Humans only use 10% of their brains.",
  "Bulls are angered by the color red."
];

function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [startTimes, setStartTimes] = useState([Date.now()]);
  const [times, setTimes] = useState(Array(10).fill(0));

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    const endTime = Date.now();
    const newTimes = [...times];
    newTimes[currentQuestion] = endTime - startTimes[currentQuestion];
    setTimes(newTimes);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setStartTimes([...startTimes, Date.now()]);
    } else {
      onComplete(newAnswers, newTimes);
    }
  };

  return (
    <div className="card p-6 mx-auto" style={{ maxWidth: '600px' }}>
      <div className="mb-4">
        <progress 
          className="progress is-primary" 
          value={currentQuestion + 1} 
          max={questions.length}
        />
        <p className="has-text-centered has-text-grey-lighter">Question {currentQuestion + 1} of {questions.length}</p>
      </div>
      
      <div className="box" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
          <p className="is-size-4 question-text has-text-centered">{questions[currentQuestion]}</p>
        </div>
        
        <div className="buttons" style={{ marginTop: 'auto' }}>
          {['True', 'False', 'Maybe'].map((option) => (
            <button
              key={option}
              className="button is-primary is-fullwidth mb-2"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;