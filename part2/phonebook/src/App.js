import React, { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Filter from './components/Filter'
import Form from './components/Form'
import Phonebook from './components/Phonebook'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterList, setList ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(()=>{
    console.log('effect start');
    axios
    .get('http://127.0.0.1:3001/persons')
    .then(response=>{
      console.log("promise fulfilled");
      setPersons(response.data)
      setList(response.data)
    })
  },[])
  console.log('render',persons.length,'persons');

  const updateInput = (state)=>(event)=>state(event.target.value)

  const submitForm = (event)=>{
    event.preventDefault();
    if(persons.every(dat=>dat.name.toUpperCase()!==newName.toUpperCase())===false){
      return alert(`Entry '${newName}' already exists.`)
    }
    if(newName.length > 0){
      const tmp = {name:newName,number:newNumber}
      setNewName('')
      setNewNumber('')
      setPersons(persons.concat(tmp))
      setList(filterList.concat(tmp))
    }
    return console.log('Not submitting, form blank.')
  }

  const filterFunc = (e)=>{
    let result = []
    const checkDaList = ()=>{
      persons.forEach((dat,i,arr)=>{
        if(dat.name.toUpperCase().includes(e.target.value.toUpperCase())){
          result.push(dat)
          setList(result)
        }
      })
    }
    if(e.target.value === ''){
      setList(persons.map(a=>a))
    }
    else if(e.target.value !== ''){
      checkDaList()
    }
    else if(e.target.value.length < filter.length){
      setList(persons.map(a=>a))
      checkDaList()
    }
    setFilter(e.target.value)
  }

  console.log("filter", filter, '\nFilterList',filterList,'\ninput.length:', filter.length)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterFunc={filterFunc}/>
      <h2>Add New Entry</h2>
      <Form submitForm={submitForm} newName={newName} setNewName={setNewName} setNewNumber={setNewNumber} updateInput={updateInput}/>
      <Phonebook filterList={filterList}/>
    </div>
  )
}

export default App