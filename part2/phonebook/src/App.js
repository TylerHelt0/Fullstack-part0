import React, { useState,useEffect } from 'react'
import './App.css'
import Alert from './components/Alert'
import Filter from './components/Filter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import axios from 'axios'


const App = () => {
  const [state, setState] = useState({
    persons:[],
    numbersList:[],
    filterInput:'',
    newName:'',
    newNumber:'',
    message:''
  })

  //Initial load of database
  useEffect(()=>{
    axios
    .get('http://127.0.0.1:3001/persons')
    .then(response=>{
      setState(state=>({
        ...state,
        persons:response.data,
        numbersList:response.data
      }))
      console.log('New data fetched from server',response.data)
    })
  },[])


  return (
    <div>
      <h2>Phonebook</h2>
      <Alert state={state}/>
      <Filter state={state} setState={setState}/>
      <h2>Add New Entry</h2>
      <Form state={state} setState={setState}/>
      <Phonebook state={state} setState={setState}/>
    </div>
  )
}

export default App
