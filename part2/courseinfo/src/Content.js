import React from 'react';
import Part from './Part'

const Content = (prop) => {
  return (
    <>
    <Part part={prop.parts[0].name}exer={prop.parts[0].exercises}/>
    <Part part={prop.parts[1].name}exer={prop.parts[1].exercises}/>
    <Part part={prop.parts[2].name}exer={prop.parts[2].exercises}/>
    </>
  )
}

export default Content;
