import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Countries = ({list,onClick,weather,setWeather,city,setCity})=>{

  if(list.length === 1){
    setCity(list[0].capital+', '+list[0].name)
    return(
      <div>
      <h2>{list[0].name}</h2>
      <p>Captial: {list[0].capital}</p>
      <p>Population: {list[0].population}</p>

      <h3>Languages</h3>
      <ul>
        {list[0].languages.map(lang=><li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img src={list[0].flag}/>

      <h3>Weather in {list[0].capital}</h3>
      <p>Temperature: {weather.temp}</p>
      <p>Wind: {weather.wind}</p>
      </div>
    )
  } else if (list.length === 0){
    return(
      <p>type something</p>
    )
  } else if(list.length >10){
    
    return(
      <p>Too many matches, specify another filter</p>
    )
  } else if(list.length <= 10){
    return(
      list.map(country=><p>{country.name}<span><button onClick={onClick(country.name)}>show</button></span></p>)
    )
  }
}

export default Countries
