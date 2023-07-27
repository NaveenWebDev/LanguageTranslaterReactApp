import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [option, setOption] = useState([])
  const [to, setTo] = useState("en")
  const [from, setFrom] = useState("en")
  const [input, setInput] = useState("")
  const [Output, setOutput] = useState("")

  useEffect(()=>{
    axios.get("https://libretranslate.de/languages", {headers:{"accept":"application/json"}})
    .then(res=>{
      setOption(res.data)
    })
  },[])

  const translate = ()=>{
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('apiKey', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post("https://libretranslate.de/translate", params, {
      headers:{
        "accept":"application/json", 
        "Content-Type":"application/x-www-form-urlencoded"
      },
    }).then(res=>{
      setOutput(res.data.translatedText)
    })
}

  return (
    <div className="App">
      <div>
      <h3>From : {from}</h3>
        <select onChange={e=>setFrom(e.target.value)}>
          {option.map(opt=> <option key={opt.code} value={opt.code}>{opt.name}</option> )}
        </select>
      </div>
      <h3>To : {to}</h3>
      <div>
        <select onChange={e=>setTo(e.target.value)}>
        {option.map(opt=> <option key={opt.code} value={opt.code}>{opt.name}</option> )}
        </select>
      </div>

      <div>
        <textarea  cols="50" rows="8" onInput={(e)=>setInput(e.target.value)}></textarea>
      </div>
      <div>
        <textarea  cols="50" rows="8" value={Output}></textarea>
      </div>
      <div>
        <button onClick={e=>translate()}>Translate</button>
      </div>

    </div>
  );
}

export default App;
