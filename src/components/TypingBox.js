import React, { useEffect, useState } from 'react';
import Timer from './Timer';

const TypingBox = () => {
    const [userInput,setUseInput] = useState("");
    const [testStart,setTestStart] = useState(false);
    const [testEnd,setTestEnd] = useState(false);

    if(userInput && testStart===false)
    {
        setTestStart(true);
      
    }



    function handleInput(e){
      console.log(e.key);
    }

    let para = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi molestias cupiditate dignissimos aut. Inventore, sint atque illum maiores cumque, eaque distinctio saepe tempore suscipit dolorem sed minima, asperiores voluptates ipsam natus! Qui molestias deserunt a? Libero dicta minima quos accusamus nihil necessitatibus asperiores fuga nemo vero sapiente, pariatur facere!`
    let wordCount =0,charCount=0;
    
    
  return (
    <div className='typing-box'>
       <Timer testStart={testStart} setTestStart={setTestStart}/>
    
    
     <div className='displayText' tabIndex={0} onKeyDown={handleInput}>
       <code className='words'>
       {  
          para.split(" ").map((word)=>(
            <span className='word' key={'word'+(wordCount++)}>
              {
                 word.split("").map((char)=>(
                 <span key={'char'+(charCount++)}>{char}</span>
              ))
              }
              </span>
          ))
          
       }
       </code>
       </div>
       
      
    </div>
  )
}
export default TypingBox;