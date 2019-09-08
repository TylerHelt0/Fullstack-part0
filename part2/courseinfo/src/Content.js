import React from 'react';
import Part from './Part'

const Content = (prop) => {
  const listParts = prop.parts.map((x,i)=><Part key={i+x.exercises}part={x.name}exer={x.exercises}/>)
  return (
    <>
   { listParts}
    </>
  )
}

export default Content;

    
    
