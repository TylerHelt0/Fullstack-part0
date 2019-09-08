import React from 'react';

const Part = (prop) =>{
  console.log(prop)
  return (
    <li >
      {prop.part} {prop.exer}
    </li>
  )
}

export default Part
