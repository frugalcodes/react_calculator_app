import React from 'react'
import "./Input.css"

const Input = ({text, result, error}) => {
  return (
    <div className='input-wrapper'>
    
    <div className='result'>
      <h1>{result}
      {error}</h1>
    </div>

    <div className='text'>
      <h3>{text}</h3>
    </div>
    
    </div>
  )
}

export default Input