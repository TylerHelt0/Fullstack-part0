import React from 'react';

const Filter = (props)=>{
    return(
        <div>Filter phonebook with: <input value={props.filter} onChange={props.filterFunc} placeholder='Type here...'/></div>
    )
}

export default Filter