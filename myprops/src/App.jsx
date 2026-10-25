import React from 'react'
import Myprops from './component/Myprops'

function App() {
  const name = "John Doe";
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome, {name}!</p>
      <Myprops/>
      <Myprops />
    </div>
  )
}

export default App