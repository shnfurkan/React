import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function App() {
  const {value} = useSelector((state) => state.hesaplama)
  const dispatch = useDispatch()

  const handleIncrementButton = () => {
    dispatch(increment());
  }

  const handleDecrementButton = () => {
    dispatch(decrement());
  }

  return (
    <div>
        <span>{value}</span> <br/> <br/>
        <button onClick={handleIncrementButton}>Increment</button> <br/> <br/>
        <button onClick={handleDecrementButton}>Decrement</button>
    </div>
  )
}

export default App




