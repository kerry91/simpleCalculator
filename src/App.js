import { useState } from "react";
import "./App.css";

function App() {
  let [input, setInput] = useState(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(input));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(input));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(input));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(input));
  }

  function resetInput(e) {
    e.preventDefault();
    setInput(" ");
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p>{result}</p>
        <input
          id="input"
          name="input"
          pattern="[0-9]"
          type="number"
          placeholder="Type a number"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
