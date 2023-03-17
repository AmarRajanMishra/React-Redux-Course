import React from 'react'

function Counter1(props) {
    const {count, setCount} = props
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <p>Count: {count}</p>
        </div>
  )
}

export default Counter1
