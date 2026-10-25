import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Mydynamic() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
  return (
    <div>
        <h1>Dynamic Routing</h1>
        <p>This is a dynamic id: {id}</p>
        <button onClick={handleClick}>About</button>
    </div>
  )
}

export default Mydynamic