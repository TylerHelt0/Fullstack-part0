import React from 'react';
import Statistic from './Statistic';

const Statistics = ({good,neutral,bad})=>{
    let Total = good + bad + neutral;
    let percentPos = (good/Total)*100
    let average = ((good*1)+(bad*-1)+(neutral*0))/3
    
    if (Total === 0){
     return(<h3>Please submit Feedback to view results</h3>)   
    }
    return (
        <div>
        <h1>Statistics</h1>
        <table>
            <tbody>
                <Statistic text='Good'value={good}/>
                <Statistic text='Neutral'value={neutral}/>
                <Statistic text='Bad'value={bad}/>
                <Statistic text='Total'value={Total}/>
                <Statistic text='Average'value={average.toFixed(2)}/>
                <Statistic text='Postiive'value={percentPos.toFixed(0)+'%'}/>
            </tbody>
        </table>
        </div>
    )
}

export default Statistics