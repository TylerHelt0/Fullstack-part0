import React, {useState,useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Countries from './Components/Countries'

function App() {
  const [query, setQuery] = useState('')
  const [list, setList] = useState([])
  const [city, setCity] = useState('Gulfport')
  const [weather, setWeather] = useState({temp:'50',wind:'50 KPH, Direction NNW'})

  const queryChange = (event)=>{
    setQuery(event.target.value)
  }

  const handleShow = (country)=>{
    return ()=>{
      setQuery(country)
    }
  }

  useEffect(()=>{
    axios
    .get(`https://restcountries.eu/rest/v2/name/${query}`)
    .then((res)=>{
      console.log(res)
      setList(res.data)
    })
    .catch((err)=>{
      console.log('No input')
    })
  },[query])

  useEffect(()=>{
    axios.get(`http://api.weatherstack.com/current?access_key=e43941659ab61aeeb0f68de49f88ad14&query=${city}`)
    .then((res)=>{
      console.log(res);
      const str = res.data.current
      setWeather({temp:str.temperature, wind:str.wind_speed + ' KPH, Direction ' + str.wind_dir})
    }).catch()
  },[city])

  return (
    <div className="App">
      <p>Find countries <input type='text' value={query} onChange={queryChange}/></p>
      <Countries list={list} onClick={handleShow} weather={weather} setWeather={setWeather} city={city} setCity={setCity}/>
    </div>
  );
}

export default App;
