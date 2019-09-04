import React from 'react';

const Total = (prop) =>{
  return (
    <>
    <p>Number of exercises {prop.parts[1].exercises + prop.parts[2].exercises + prop.parts[0].exercises}</p>
    </>
  )
}

export default Total;
