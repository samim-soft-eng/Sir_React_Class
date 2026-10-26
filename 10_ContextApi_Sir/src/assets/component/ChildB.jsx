import React from 'react'
import ChildC from './ChildC'
import { useContext } from 'react'
import { Mystore } from '../../App'
import { useState, useRef } from 'react'


function ChildB() {
    const [myName, setMyName] = useState("")
    const MyRef = useRef()
    
    const handleClick = () => {
      setMyName("")
      MyRef.current.focus()
      console.log(myName)

    }
  return (
    <div>
        <input type="text" ref={MyRef} onChange={(e)=>setMyName(e.target.value)} value={myName} />
        <button onClick={handleClick}>Reset</button>
        <br />
        <br />
        <ChildC />
    </div>
  )
}

export default ChildB