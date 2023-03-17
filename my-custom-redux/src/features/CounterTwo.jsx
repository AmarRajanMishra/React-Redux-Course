import React from 'react'
import { useSelector } from 'react-redux'

function CounterTwo() {
    const count = useSelector((state)=> state.counter.count)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default CounterTwo
