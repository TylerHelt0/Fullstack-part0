import React from 'react'
import axios from 'axios'

const Form = ({state,setState})=>{

  const submitForm = (event)=>{
    event.preventDefault();
    //Check person already exists
    if(state.persons.every(person=>person.name.toUpperCase()!==state.newName.toUpperCase())===false){
      // Check if name already exists and if so, update number
      state.persons.forEach((data,i,arr)=>{
        if(data.name.toUpperCase() === state.newName.toUpperCase()){
          if(window.confirm(`Do you want to change the number for ${data.name}?`)){
            const tmp = data
            tmp.number = state.newNumber
            console.log('Entry updated',tmp);
            axios.put(`http://127.0.0.1:3001/persons/${data.id}`,tmp)
            .then(
              axios
              .get('http://localhost:3001/persons')
              .then(response=>{
                setState(state=>({
                  ...state,
                  persons:response.data,
                }))
                console.log('New data fetched form server',response.data)
              })
            )
          }
        }
      })
    }
    //Add person to phonebook if input not empty
    else if(state.newName.length > 0 && state.newNumber.length > 0){
      const tmp = {name:state.newName,number:state.newNumber}
      axios.post('http://localhost:3001/persons',tmp)
      .then(
        axios.get('http://localhost:3001/persons')
        .then(response=>{
          setState(state=>({
            ...state,
            newName:'',
            newNumber:'',
            persons:response.data,
            numbersList:response.data
          }))
          console.log('Data retrieved from server',response.data);
        })
      )
      console.log('New number added',tmp)
    } else{
      alert('Check fields and try again')
      console.log('Not submitting, form blank.')
    }
  }

  return(
  <div>
      <form onSubmit={submitForm}>
          <div>
            Name: <input id='input' value={state.newName}
                    onChange={(e)=>{
                      const tmp = e.target.value
                      setState(state=>{
                        return {...state,newName:tmp}
                      })}}
                    placeholder='Type here...'
                  />
          </div>
          <div>
            Number: <input value={state.newNumber}
                    onChange={(e)=>{
                      const tmp = e.target.value
                      setState(state=>{
                        return {...state,newNumber:tmp}
                      })}}
                    placeholder='(+1) 555-555-5555'
                  />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
      </form>
  </div>
  )
}

export default Form
