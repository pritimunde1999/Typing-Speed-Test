import React,{useState, useEffect} from 'react'


const Timer = ({setTestTime,countDown}) => {
    
  
  return (
    <div className='timer'>
        <p>{countDown}</p>
        <div className='timerBtn'>
            <button onClick={()=>setTestTime(15)}>15s</button>
            <button onClick={()=>setTestTime(30)}>30s</button>
            <button onClick={()=>setTestTime(60)}>60s</button>
        </div>
    </div>
  )
}

export default Timer