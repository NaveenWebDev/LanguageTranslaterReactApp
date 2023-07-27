import './App.css';
import { useState } from 'react';

function App() {

  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")
  const [input, setInput] = useState("")
  const [Output, setOutput] = useState("")

  return (
    <div className="App">
      <div>
      <h3>From :</h3>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <h3>To :</h3>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <div>
        <textarea  cols="50" rows="8"></textarea>
      </div>
      <div>
        <textarea  cols="50" rows="8"></textarea>
      </div>
      <div>
        <button>Translate</button>
      </div>

    </div>
  );
}

export default App;
