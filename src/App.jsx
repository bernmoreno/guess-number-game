import { useState } from "react";
import "./App.css";

function App() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const [secret, setSecret] = useState(randomNum);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkGuess = () => {
    const num = Number(guess);
    if (!num) {
      setMessage("Enter a valid number");
    } else if (num === secret) {
      setMessage("🎉 Correct! You guessed it!");
    } else if (num > secret) {
      setMessage("📉 Too high!");
    } else {
      setMessage("📈 Too low!");
    }
  };

  const resetGame = () => {
    setSecret(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
  };

  return (
    <div className="container">
      <h1>Guess the Number</h1>

      <div className="game-box">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter a number 1–100"
        />

        <button onClick={checkGuess}>Guess</button>
        <button className="reset" onClick={resetGame}>Reset</button>

        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
