import { useMemo } from 'react';
import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useMemo kullanımı bir veriyi çekiyorsan alttaki dizi şartını bozmuyorsa hafızasındakini direk getirir,
  // ancak o dizideki değişirse yeniden render yapar.

  // useCallback geriye fonksiyon döner ancak useMemo da geriye değer döner.

  const memoizedCountString = useMemo(() => {
    return `Count is: ${count}`
  },[count])

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleClick = () => {
    setCount(count+1);
  }

  return (
    <div>
      <input value={name} onChange={handleChange}></input>
      <button onClick={handleClick}>{memoizedCountString}</button>
      <p>Name: {name}</p>
    </div>
  )
}

export default App

