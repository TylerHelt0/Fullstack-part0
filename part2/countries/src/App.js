import React, {useState,useEffect} from 'react';
import './App.css';
import Countries from './Components/Countries'
import axios from 'axios'


const App = ()=>{

  const [state, setState] = useState({
    query:'',
    list:[],
    city:'',
    weather:{temp:'',wind:''}
  })

//Set state.query when the user types a letter
  const queryChange = (event)=>{
    setState({...state,query:event.target.value});
  }

//Set state.query to the clicked countries name
  const handleShow = (country)=>{
    return ()=>{
      setState((state)=>{return{...state,query:country}})
    }
  }

//Everytime user types, retrieve list of countries and update state.list
  useEffect(()=>{
    if (state.query.length > 0){
      axios
      .get(`https://restcountries.eu/rest/v2/name/${state.query}`)
      .then((res)=>{
        console.log("Contries retrieved: ", res.data)
        setState((state)=>{return {...state,list:res.data}})
      })
      .catch((err)=>{
        console.log('No input')
      })
    } else if (state.query.length === 0){
      setState((state)=>{return {...state,list:[]}})
    }
  },[state.query])

//When there is only one country to show, update state.city for showing weather
  useEffect(()=>{
    if(state.list.length === 1){
      setState({...state,city:state.list[0].capital+', '+state.list[0].alpha2Code})
    } else if (state.list.length > 1 && state.city !== ''){
      setState({...state,city:''})
    }
  },[state.list])

  //Retrieve weather city is set
  useEffect(()=>{
    if(state.city !== ''){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.city}&units=imperial&APPID=aee6cab34bf91e2406be1f8b2a547ced`)
      .then((res)=>{
        console.log(`Weather data for ${state.list[0].name}`,res);
        if (res.data.main && res.data.wind.speed){
          setState((state)=>{
            return {...state,
              weather:{
                temp:Math.round(res.data.main.temp),
                wind:Math.round(res.data.wind.speed) + ' MPH, Direction '+ degToCompass(res.data.wind.deg)
              }
            }
          })
        }
      })
      .catch((err)=>{console.log(err)})
    }
  },[state.city])


  return (
    <div className="App">
      <p>Find countries <input type='text' placeholder='Type a country' value={state.query} onChange={queryChange}/></p>
      <Countries state={state} setState={setState} handleShow={handleShow}/>
    </div>
  );
}

function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

export default App;
