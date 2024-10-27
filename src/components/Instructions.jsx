import { VenetianMask } from 'lucide-react';

function Instructions({ onStart }) {
  return (
    <div className="card p-6 mx-auto" style={{ maxWidth: '600px' }}>
      <h1
        className="title has-text-centered"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <VenetianMask size={32} />
        Private Quiz Experience
        <VenetianMask size={32} />
      </h1>
      <div className="content">
        <p className="subtitle">Your Privacy is Our Priority</p>
        <ul>
          <li>All your answers remain completely private</li>
          <li>No data is ever sent to any server</li>
          <li>
            All responses are stored temporarily in your browser's session
            storage
          </li>
          <li>Data is automatically cleared when you close your browser</li>
        </ul>
        <p>
          The quiz consists of 10 statements. For each one, choose whether you
          think it's:
        </p>
        <ul>
          <li>True</li>
          <li>False</li>
          <li>Maybe</li>
        </ul>
        <p>Take your time to consider each statement carefully.</p>
      </div>
      <div className="has-text-centered">
        <button className="button is-primary is-large" onClick={onStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Instructions;
