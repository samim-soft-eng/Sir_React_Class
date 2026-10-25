import React, {useEffect, useState } from 'react'

function Mystate() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("No Name")

  const inc = () =>{
    setNumber(number + 1)
  }
  const dec = () => setNumber (number - 1)

  const handlename = () => {
    if(name === "No Name"){
      setName("Samim")
    }else if(name === "Samim"){
      setName("Rahul")
    }else if(name === "Rahul"){
      setName("Ripan")
    }else{
      setName("No Name")
    }
  }

  useEffect(()=>{
    console.log("****");
  }, [number])

  return (
    <div>
      <button onClick={inc}>Increment</button>
      <h1>My Number: {number}</h1>
      <button onClick={dec}>Decrement</button>
      <br />
      <button onClick={()=> setNumber(0)}>Reset</button>
      <br />
      <h1>My Name: {name}</h1>
      <button onClick={handlename}>Change Name</button>

    </div>
  )
}

export default Mystate