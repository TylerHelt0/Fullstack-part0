import React from 'react'
import axios from 'axios'

const Form = ({state,setState})=>{

  const submitForm = (event)=>{
    event.preventDefault();

    //In case input is empty
    if (state.newName === '' || state.newNumber ===''){
      alert('Check fields and try again')
      console.log('Not submitting, form blank.')
    }

    //Check if input is empty and if not....
    else if(state.newName.length > 0 && state.newNumber.length > 0){
      //If number already exists on server, update it.
      if(!state.persons.every(person=>person.name.toUpperCase()!== state.newName.toUpperCase())){
        state.persons.forEach((data,i,arr)=>{
          if(data.name.toUpperCase() === state.newName.toUpperCase()){
            const tmp2 = data
            console.log(tmp2);
            tmp2.number=state.newNumber
            axios.put(`http://127.0.0.1:3001/persons/${data.id}`,tmp2)
            .then(()=>{
              console.log('Entry updated',tmp2)
              axios.get('http://localhost:3001/persons')
              .then(response=>{
                setState(state=>({
                  ...state,
                  persons:response.data,
                  numbersList:response.data,
                  message:{info:tmp2.name}
                }))
                console.log('New data fetched form server',response.data)
                setTimeout(()=>{
                  setState(state=>({...state,message:''}))
                },5000)
              })
            })
            .catch((err)=>{
              if(err){
                setState((state)=>({...state,message:{err:err}}))
                setTimeout(()=>{setState(state=>({...state,message:''}))},5000)
              }
            })
          }
        })
      }
      //Else, create it.
      else{
        const tmp = {name:state.newName,number:state.newNumber}
        axios.post('http://localhost:3001/persons',tmp)
        .then(()=>{
          console.log('New number added',tmp)
          axios.get('http://localhost:3001/persons')
          .then(response=>{
            setState(state=>({
              ...state,
              newNumber:'',
              newName:'',
              persons:response.data,
              numbersList:response.data,
              message:{success:tmp.name}
            }))
            console.log('Data retrieved from server',response.data);
            //Show alert for 5 secs
            setTimeout(()=>{
              setState(state=>({...state,message:''}))
            },5000)
          })
        })

      }
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
