import './App.css'
import { useEffect, useState } from 'react'

function App() {
  
  const [furkan, setFurkan] = useState(0);
  const [esra, setEsra] = useState(0);

  // önce hepsi 1 defa çalışır sonra alttakiler olur.

  useEffect(()=> {
    console.log('her zaman çalişir.')
  });

  useEffect(()=> {
    console.log('bir defa çalişir.')
  },[]);

  useEffect(()=> {
    console.log('furkan veya esra değiştiğinde çalişir.')
  },[furkan,esra]);

  useEffect(()=> {
    console.log('sadece furkan değiştiğinde çalişir.')
  },[furkan]);

  return (
    <div className='App'>

    <div>
      <button onClick={()=> setFurkan(furkan+1)}>Furkan</button>
      <div>Furkan : {furkan}</div>
    </div>

    <div>
      <button onClick={()=> setEsra(esra+1)}>Esra</button>
      <div>Esra : {esra}</div>
    </div>

    </div>
  )
}

export default App
