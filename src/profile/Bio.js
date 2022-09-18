import React from 'react'

const Bio=(props)=>{
  return(
    <div>
      <h2>Bio:</h2>
      {props.children}
      <p>I'm {props.age} years old and I like{props.leisure}</p>

    </div>
  )
}
export default Bio