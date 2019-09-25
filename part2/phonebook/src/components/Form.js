import React from 'react'

const Form = (props)=>{
    return(
    <div>
        <form onSubmit={props.submitForm}>
            <div>
              Name: <input id='input' value={props.newName} onChange={props.updateInput(props.setNewName)} placeholder='Type here...'/>
            </div>
            <div>
              Number: <input value={props.newNumber} onChange={props.updateInput(props.setNewNumber)} placeholder='(+1) 555-555-5555'/>
            </div>
            <div>
              <button type="submit">add</button>
            </div>
        </form>
    </div>
    )
}

export default Form 