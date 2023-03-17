import { useDispatch, useSelector } from "react-redux"
import {increment, decrement, incrementByAmount} from './counterSlice'


function Counter(){
    const count = useSelector((state)=>state.counter.count)
    const color = useSelector((state)=>state.theme.color)
    const dispatch = useDispatch()


    return(
        <>
        <h1>Counter App</h1>
        <h1 style={{color : color}}>Count {count}</h1>
        <button style={{backgroundColor : color}} onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(10))}>Increment By 10</button>
        </>
    )
}

export default Counter
