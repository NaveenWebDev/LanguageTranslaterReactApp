import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [option, setOption] = useState([])
  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")
  const [input, setInput] = useState("")
  const [Output, setOutput] = useState("")

  useEffect(()=>{
    axios.get("https://libretranslate.de/languages", {headers:{"accept":"application/json"}})
    .then(res=>{
      console.log(res.data)
      setOption(res.data)
    })
  })

  // curl -X 'GET' 'https://libretranslate.de/languages' -H 'accept: application/json'

  return (
    <div className="App">
      <div>
      <h3>From :</h3>
        <select>
          {option.map(opt=> <option value={opt.code}>{opt.name}</option> )}
        </select>
      </div>
      <h3>To :</h3>
      <div>
        <select>
        {option.map(opt=> <option value={opt.code}>{opt.name}</option> )}
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
