import React from 'react'

function Content() {
    const handleChange = (e)=>{
        console.log(e.target.value)
    }
    const handleList = (e)=>{
        console.log(e.target.textContent)
    }
  return (
    <div>
        {/* Simple Event Delegation Example */}
        <input onChange={handleChange} type="text" placeholder="Enter text here" />

        {/* Event Delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of attaching multiple event listeners to individual child elements. This approach takes advantage of event bubbling, allowing us to handle events for multiple child elements through a single parent element. */}
        {/* Event Delegation is importent for interview */}
        <ul onClick={handleList}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
  )
}

export default Content