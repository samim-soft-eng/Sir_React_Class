import React from 'react'
import ChildA from './assets/component/ChildA'
import { useState, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  // repeted render korte bada dei 
  const getdata = useMemo(() => {
    console.log("useMemo Called")
  }, [count]) 
  return (
    <div>
      <h1>My Value: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <ChildA abc = {getdata}/>
    </div>
  )
}

export default App
