import { useState } from 'react';
import './App.css';

function createSecretNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function App() {
  const [secretNumber, setSecretNumber] = useState(() => createSecretNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Pick a number from 1 to 100 and make your first guess.');
  const [attempts, setAttempts] = useState(0);
  const [bestScore, setBestScore] = useState(null);
  const [history, setHistory] = useState([]);

  const handleGuess = () => {
    const nextGuess = Number(guess);

    if (!Number.isInteger(nextGuess) || nextGuess < 1 || nextGuess > 100) {
      setMessage('Enter a whole number from 1 to 100.');
      return;
    }

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);
    setHistory((current) => [nextGuess, ...current].slice(0, 8));

    if (nextGuess === secretNumber) {
      setMessage(`Correct. You found ${secretNumber} in ${nextAttempts} guesses.`);
      setBestScore((current) => (current === null ? nextAttempts : Math.min(current, nextAttempts)));
      return;
    }

    const difference = Math.abs(secretNumber - nextGuess);
    const hint = nextGuess > secretNumber ? 'Too high.' : 'Too low.';
    const temperature = difference <= 5 ? 'Very close.' : difference <= 15 ? 'Getting warmer.' : 'Still far away.';

    setMessage(`${hint} ${temperature}`);
  };

  const handleReset = () => {
    setSecretNumber(createSecretNumber());
    setGuess('');
    setMessage('New round started. Pick a number from 1 to 100.');
    setAttempts(0);
    setHistory([]);
  };

  const guessesLeftLabel = Math.max(0, 10 - attempts);

  return (
    <main className="app-shell">
      <section className="game-card">
        <div className="hero-copy">
          <p className="eyebrow">Arcade Challenge</p>
          <h1>Guess Number Game</h1>
          <p className="hero-text">
            Find the hidden number from 1 to 100. Use the hints, track your streak, and try to beat your best score.
          </p>
        </div>

        <div className="stats-grid">
          <article>
            <span>{attempts}</span>
            <p>Attempts</p>
          </article>
          <article>
            <span>{bestScore ?? '--'}</span>
            <p>Best score</p>
          </article>
          <article>
            <span>{guessesLeftLabel}</span>
            <p>Target pace</p>
          </article>
        </div>

        <div className="input-panel">
          <label htmlFor="guess-input">Your guess</label>
          <input
            id="guess-input"
            type="number"
            min="1"
            max="100"
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            placeholder="Enter a number from 1 to 100"
          />

          <div className="button-row">
            <button type="button" onClick={handleGuess}>
              Check Guess
            </button>
            <button type="button" className="secondary-button" onClick={handleReset}>
              New Game
            </button>
          </div>
        </div>

        <p className="status-message">{message}</p>

        <section className="history-panel" aria-label="Recent guesses">
          <div className="history-header">
            <h2>Recent guesses</h2>
            <span>{history.length}/8 shown</span>
          </div>

          {history.length === 0 ? (
            <p className="empty-history">No guesses yet. Start with your first number.</p>
          ) : (
            <ul className="history-list">
              {history.map((entry, index) => (
                <li key={`${entry}-${index}`}>{entry}</li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
