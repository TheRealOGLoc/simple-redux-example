import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store.ts'
import { decrement, increment, incrementByAmount, incrementAsync } from '../state/counter/counterSlice.ts'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value) // use useSelector to get the value from root state
  const dispatch = useDispatch<AppDispatch>() // add the appdispatch when using async

  const [amount, setAmount] = useState<number | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const amountInt = parseInt(e.target.value)
    setAmount(amountInt)
  }

  return (
    <div>
      <h2>{count}</h2>
      <input onChange={handleChange} type="text" placeholder='amount' />
      <div>
        <button onClick={() => dispatch(increment())} >increment</button>
        <button onClick={() => dispatch(decrement())} >decrement</button>
        <button onClick={() => {
          if (amount) {
            return dispatch(incrementByAmount(amount))
          }
        }} >increment by amount</button>
        <button onClick={() => dispatch(incrementAsync(10))} >increment async</button>
      </div>
    </div>
  )
}
