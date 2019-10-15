import React from 'react';

const Filter = ({state,setState})=>{

  //Function to check the state.persons list for filter query
  const filterFunc = (e)=>{
    let result = []

    //if state.filterInput is included in any state.persons.name value, add to results
    const checkDaList = ()=>{
      state.persons.forEach((dat)=>{
        if(dat.name.toUpperCase().includes(e.target.value.toUpperCase())){
          result.push(dat)
          //set displayed numbers to filtered results
          setState(state=>({...state,numbersList:result}))
        }
      })
    }

    //If filterInput is empty, copy initial state.persons to display list(state.numbersList)
    if(e.target.value === ''){
      setState(state=>({...state,numbersList:state.persons.map(a=>a)}))
    }

    //If filterInput not empty, filter the list
    else if(e.target.value !== ''){
      checkDaList()
    }

    //Handle backspace
    else if(e.target.value.length < state.filterInput.length){
      setState(state=>({...state,persons:state.persons.map(a=>a)}))
      checkDaList()
    }

    const str = e.target.value
    setState(state=>({...state,filterInput:str}))
  }

  return(
      <div>
      Filter phonebook with:
      <input
        value={state.filterInput}
        onChange={filterFunc}
        placeholder='Type here...'
      />
      </div>
  )
}

export default Filter
