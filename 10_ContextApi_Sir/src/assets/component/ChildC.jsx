import React from 'react'
import { useContext } from 'react'
import { Mystore } from '../../App'

function ChildC() {
    const dada = useContext(Mystore)
  return (
    <div>
        <h1>My Name is {dada}</h1>
    </div>
  )
}

export default ChildC