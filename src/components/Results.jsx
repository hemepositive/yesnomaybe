function Results({ answers, times, onNeedHelp }) {
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

  return (
    <div className="card p-6 mx-auto" style={{ maxWidth: '800px' }}>
      <h1 className="title has-text-centered mb-5">Your Results</h1>
      
      <div className="content">
        {questions.map((question, index) => (
          <div key={index} className="box mb-3 result-item py-3">
            <div className="columns is-mobile is-vcentered mb-0">
              <div className="column is-7 pr-0">
                <p className="is-size-6 mb-0 question-text">{question}</p>
              </div>
              <div className="column is-5 pl-2">
                <p className="is-size-6 mb-0">
                  <span className="result-label">Answer:</span>{' '}
                  <span className="result-value">{answers[index]}</span>
                  <br />
                  <span className="result-label">Time:</span>{' '}
                  <span className="result-value">{(times[index] / 1000).toFixed(1)}s</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="has-text-centered mt-5">
        <p className="mb-4">
          <span className="result-label">Average time per question:</span>{' '}
          <span className="result-value">
            {(times.reduce((a, b) => a + b, 0) / times.length / 1000).toFixed(1)} seconds
          </span>
        </p>
        
        <div className="box mb-4">
          <h3 className="title is-4 mb-3">The hidden truth</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <button 
          className="button is-primary is-large"
          onClick={onNeedHelp}
        >
          I Need Help
        </button>
      </div>
    </div>
  );
}

export default Results;