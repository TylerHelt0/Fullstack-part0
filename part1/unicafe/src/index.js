import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text={'Good'}action={btnClick('g')}/>
        <Button text={'Neutral'}action={btnClick('n')}/>
        <Button text={'Bad'}action={btnClick('b')}/>
      </div>
      <Statistics good={good}neutral={neutral}bad={bad}/>
    </div>
  )
  
  function btnClick(data){
    return ()=>{if(data === 'g'){
        setGood(good +1)
      }
      else if(data === 'n'){
        setNeutral(neutral +1)
      }
      else if(data === 'b'){
        setBad(bad + 1)
      }}
  }
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

