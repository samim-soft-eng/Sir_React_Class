import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/product/123');
  }
  return (
    <div>About
      <button onClick={handleClick}>Dynamic</button>
    </div>
  )
}

export default About