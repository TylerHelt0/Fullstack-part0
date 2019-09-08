import React from 'react';

const Total = (prop) =>{
  const num = prop.parts.reduce((accu,value)=>accu + value.exercises,0)
  console.log(num)
  return (
    <>
    <p>Number of exercises {num}</p>
    </>
  )

}

export default Total;
