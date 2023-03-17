import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { themeChange } from './themeSlice'

function ThemeChange() {
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Theme Changer</h1>
      <input type={'text'} onChange={(e)=> setColor(e.target.value)} />
      <button onClick={()=> dispatch(themeChange(color))}>Click</button>
    </div>
  )
}

export default ThemeChange
