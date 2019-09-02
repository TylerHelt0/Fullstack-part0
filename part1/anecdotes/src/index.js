import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const randoNum = ()=>{return Math.floor(Math.random()*6)}
  const [selected, setSelected] = useState(randoNum)
  const [votes,setVotes] = useState([0,0,0,0,0,0])
  const anecKey = votes.indexOf(Math.max(...votes))
  console.log('------------------------------\n',props)
  console.log('Quote votes: ',votes,'\n------------------------------')

  return (
    <div>
        {props.anecdotes[selected]}
        <p>Has {votes[selected]} votes</p>
        <div>
            <button onClick={getQuote}>Next Annecdote</button>
            <button onClick={castVote(selected)}>Vote</button>
        </div>
        <h3>Winning Quote</h3>
        <p>{props.anecdotes[anecKey]}</p>
    </div>
  )
    function getQuote(){
        setSelected(randoNum)
    }
    
    function castVote(selected){
      return ()=>{
        let newVotes = [...votes]
        newVotes[selected]++
        setVotes(newVotes)
      }
    }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)