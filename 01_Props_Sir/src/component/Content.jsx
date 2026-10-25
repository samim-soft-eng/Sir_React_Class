import React from 'react'

function Content({xyz}) {
    const hendelclick = () => {
        alert("hello");
    }    
  return (
    <div>Content: 
       My name is {xyz}
       //tow type a kora jai
       <button onClick={hendelclick}>submit</button>
       <button onClick={() => alert(`Hello, ${xyz}!`)}>Click me</button>
    </div>
  )
}

export default Content