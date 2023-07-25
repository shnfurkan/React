import './App.css'
import { useReducer } from 'react'

const initialValue=0;

const reducer = (degerNEW,textNEW) => {
  switch(textNEW) {
    case 'increment':
      return degerNEW+1;
    case 'decrement':
      return degerNEW-1;
    case 'reset':
      return initialValue;
      default:
    return degerNEW;
  }
}

function App() {

  const [deger,text] = useReducer(reducer,initialValue);

  return (
    <div>
      <p>{deger}</p>
      <button onClick={ () => text('increment')  }>+++++++</button>
      <button onClick={ () => text('decrement')  }>-------</button>
      <button onClick={ () => text('reset')  }>Eski haline dön!</button>

    </div>
  )
}

export default App
