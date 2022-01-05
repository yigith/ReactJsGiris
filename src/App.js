import { useState } from 'react';
import Madencilik from './Madencilik'
import './App.css';

function App() {
  const [ad, setAd] = useState("");
  const [adlar, setAdlar] = useState(["Ali", "Can"]);
  var kelime = "selam";

  function degisti(e) {
    setAd(e.target.value);
  }

  function teslimOlurken(e) {
    e.preventDefault();
    setAdlar([...adlar, ad]);
    setAd("");
  }

  return (
    <div className="App">
      <h1>Hoşgeldin {ad}</h1>
      <form onSubmit={teslimOlurken}>
        <label>Adın</label> <br />
        <input type="text" value={ad} onChange={degisti} required />
        <button className="btn-ekle">Ekle</button>

        <ul>
          {adlar.map((v,i) => <li key={i}>{v}</li>)}
        </ul>

        <p>
          Öğrenci Sayısı: {adlar.length}
        </p>
      </form>
      <Madencilik />
    </div>
  );
}

export default App;
