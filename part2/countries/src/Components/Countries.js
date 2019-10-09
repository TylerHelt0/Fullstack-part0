import React from 'react'
import Weather from './Weather'

const Countries = ({state,setState,handleShow})=>{

  if(state.list.length === 1){
    return(
      <div>
      <h2>{state.list[0].name}</h2>
      <p>Captial: {state.list[0].capital}</p>
      <p>Population: {state.list[0].population}</p>

      <h3>Languages</h3>
      <ul>
        {state.list[0].languages.map(lang=><li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img src={state.list[0].flag}/>
      <Weather state={state}/>
      </div>
    )
  } else if (state.list.length === 0){
    return(
      <></>
    )
  } else if(state.list.length >10){

    return(
      <p>Too many matches, specify another filter</p>
    )
  } else if(state.list.length <= 10){
    return(
      state.list.map(country=><p key={country.name}>{country.name}<span><button onClick={handleShow(country.name)}>show</button></span></p>)
    )
  }
}

export default Countries
