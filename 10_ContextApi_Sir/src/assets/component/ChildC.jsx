import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { Mystore } from '../../App'

function ChildC() {
    const dada = useContext(Mystore)
    const [isref,myref] = useState("")
    const re = useRef()

    const handlebtn = () => {
      myref("")
      re.current.focus()
      console.log(isref)


    }
  return (
    <div>
        <h1>My Name is {dada}</h1>

        <input type="text" ref={re} onChange={(e) => myref(e.target.value)}  value={isref}/>
        <button onClick={handlebtn}>Reset</button>
    </div>
  )
}

export default ChildC