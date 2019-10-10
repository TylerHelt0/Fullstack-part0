import React from 'react'
import axios from 'axios'

const Phonebook = ({state,setState}) =>{

  const handleDelete = (a)=>{
    return ()=>{
      if(window.confirm(`Do you really want to delete ${a.name}?`)){
        axios.delete(`http://127.0.0.1:3001/persons/${a.id}`)
        .then(
          axios.get('http://localhost:3001/persons')
          .then(response=>{
            setState(state=>({
              ...state,
              persons:response.data,
              numbersList:response.data
            }))
            console.log('New data fetched from server',response.data);
          })
        )
        console.log(`${a.name} deleted`);
      }
    }
  }

  return(
      <table>
          <thead>
            <tr><th><h2>Numbers</h2></th></tr>
          </thead>
          <tbody>
            {state.numbersList.map(a=>
              <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.number}</td>
              <td><button onClick={handleDelete(a)}>Delete</button></td>
              </tr>)}
          </tbody>
      </table>
  )
}

export default Phonebook
