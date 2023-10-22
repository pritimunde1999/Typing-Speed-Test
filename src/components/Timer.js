import React,{useState, useEffect} from 'react'


const Timer = ({testStart,setTestStart}) => {
    
    const [time,setTime] = useState(15);
    const [latestTime,setLatestTime] = useState("");
    const [testEnd,setTestEnd] = useState(false);
 

     
    useEffect(()=>{
      
      if(time===0)
      {   
        setTestEnd(true);
        setTestStart(false);
        return;
      }
     
      let interval;
      if(testStart===true){
         interval = setInterval(()=>{
          setTime(time-1)
        },1500)
      }

      setLatestTime(time);

      
      return () => clearInterval(interval);

    },[time,testStart])

    

  return (
    <div className='timer'>
        <p>{time}</p>
        <div className='timerBtn'>
            <button onClick={()=>setTime(15)}>15s</button>
            <button onClick={()=>setTime(30)}>30s</button>
            <button onClick={()=>setTime(60)}>60s</button>
        </div>
    </div>
  )
}

export default Timer