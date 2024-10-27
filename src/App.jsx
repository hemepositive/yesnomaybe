import { useState, useEffect } from 'react';
import Instructions from './components/Instructions';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Solution from './components/Solution';

function App() {
  const [stage, setStage] = useState('instructions');
  const [answers, setAnswers] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleStart = () => {
    setStage('quiz');
  };

  const handleComplete = (userAnswers, questionTimes) => {
    setAnswers(userAnswers);
    setTimes(questionTimes);
    setStage('results');
    sessionStorage.setItem('answers', JSON.stringify(userAnswers));
    sessionStorage.setItem('times', JSON.stringify(questionTimes));
  };

  const handleNeedHelp = () => {
    setStage('solution');
  };

  return (
    <div className="container p-4">
      {stage === 'instructions' && <Instructions onStart={handleStart} />}
      {stage === 'quiz' && <Quiz onComplete={handleComplete} />}
      {stage === 'results' && <Results answers={answers} times={times} onNeedHelp={handleNeedHelp} />}
      {stage === 'solution' && <Solution />}
    </div>
  );
}

export default App;