import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={}></button>
    </div>
  )
}

export default App