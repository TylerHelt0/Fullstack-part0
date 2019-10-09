import React from 'react'

const Weather = ({state})=>{
  if(state.weather.temp === ''){
    return(
      <>
      <h3>Weather in {state.list[0].capital}</h3>

      <p>No data recieved</p>
      </>
    )
  }

  if(state.weather !== ''){
    return(
      <>
      <h3>Weather in {state.list[0].capital}</h3>
      <p>Temperature: {state.weather.temp} °F</p>
      <p>Wind: {state.weather.wind}</p>
      </>
    )
  }
}

export default Weather
