import React from 'react'

const Phonebook = (props) =>{
    return(
        <table>
            <thead>
              <tr><th><h2>Numbers</h2></th></tr>
            </thead>
            <tbody>
              {props.filterList.map(a=><tr key={a.name}><td>{a.name}</td><td>{a.number}</td></tr>)}
            </tbody>
        </table>
    )
}

export default Phonebook
