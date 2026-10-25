import React from 'react'
import ChildA from './assets/component/ChildA'
import { createContext } from 'react'

const Mystore = createContext()

function App() {
  return (
    <div>
      <Mystore.Provider value="Samim Mondal">
        <ChildA />
      </Mystore.Provider>
    </div>
  )
}

export default App
export { Mystore }