import React from 'react'

const Alert = ({state}) => {
  if(state.message.success){
    return(
      <p className='sucMsg'>Added {state.message.success}</p>
    )
  }
  if(state.message.info){
    return(
      <p className='sucMsg'>Updated number for {state.message.info}</p>
    )
  }
  if(state.message.err){
    return(
      <p className='errMsg'>Entry already deleted on server. Please refresh.</p>
    )
  }
  if(state.message === ''){
    return(<></>)
  }
}

export default Alert
