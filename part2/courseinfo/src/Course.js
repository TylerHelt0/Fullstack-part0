import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course})=>{
    return (
        <div>
          <Header {...course}/>
          <Content {...course}/>
          <Total {...course}/>
        </div>
    )
}

export default Course