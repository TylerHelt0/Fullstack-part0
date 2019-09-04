import React from 'react';

const Part = (prop) =>{
  console.log(prop)
  return (
    <p>
      {prop.part} {prop.exer}
    </p>
  )
}

export default Part
