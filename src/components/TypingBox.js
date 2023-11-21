import React, { useEffect, useState, useMemo, createRef, useRef } from 'react';
import Timer from './Timer';
import { generate } from "random-words";
import { AiOutlineReload } from "react-icons/ai";
import Stats from './Stats';




const TypingBox = () => {
   const inputRef = useRef();

   const [testStart, setTestStart] = useState(false);
   const [testEnd, setTestEnd] = useState(false);
   const [intervalId, setIntervalId] = useState(null)
   const [testTime, setTestTime] = useState(15)
   const [countDown, setCountDown] = useState(testTime);

   const [currCharIdx, setCurrCharIdx] = useState(0);
   const [currWordIdx, setCurrWordIdx] = useState(0);

   const [correctChars, setCorrectChars] = useState(0);
   const [incorrectChars, setIncorrectChars] = useState(0);
   const [missedChars, setMissedChars] = useState(0);
   const [extraChars, setExtraChars] = useState(0);
   const [correctWords, setCorrectWords] = useState(0);

   const [graphData, setGraphData] = useState([])


  


   const [wordsArray, setWordsArray] = useState(() => {
      //it will generate random 50 words 
      return generate(50);
   })

   function handleWord(wordsCount) {
      console.log("Entered in this")
      setWordsArray((() => {
         return generate(wordsCount);
      }))
   }



   function startTimer() {
      const interval = setInterval(timer, 1000);
      setIntervalId(interval);

      function timer() {
         
         setCountDown((latestCountDown) => {
            setCorrectChars((correctChars) => {
               setGraphData((graphData) => {
                  return [...graphData, [testTime - latestCountDown + 1, (correctChars / 5) / (testTime - latestCountDown + 1) / 60]]
               })
               return correctChars;
            })
            if (latestCountDown === 1) {
               setTestEnd(true);
               clearInterval(interval)
               return 0;
            }
            return latestCountDown - 1
         })
      }
   }

   // creating an array of references for each character element within each word.
   //Array(wordsArray.length) ==> it is creating new array with same size as "wordsArray"
   //fill array with 0 ==> this step is not necessary since we are filling it with createRef(null)
   //.map(i => createRef(null)) maps each element of the array to a new reference created using createRef(null)
   //createref==> create reference to a DOM.
   const wordsSpanRef = useMemo(() => {
      //useRef cant use inside callback function so used this but both have same funtionality :)
      return Array(wordsArray.length).fill(0).map(i => createRef(null))
   }, [wordsArray])


   function calculateWPM() {
      //check
      return Math.round((correctChars / 5) / (testTime / 60));
   }
   function calculateAccuracy() {
      return Math.round((correctWords / currWordIdx) * 100)
   }

  

  

   const handleUserInput = (e) => {
      if (!testStart) {
         startTimer();

         setTestStart(true);
      }

      // Get the current word's reference
      const currentWordRef = wordsSpanRef[currWordIdx].current;
      const allCurrentChars = wordsSpanRef[currWordIdx].current.childNodes;
      


      // retrieves all the child nodes (individual characters) of the current word from the wordsSpanRef array
      //IF "SPACE" is get pressed by user 
      if (currentWordRef) {
         if (e.keyCode === 32)  //keycode for space
         {
            let correctCharsInAWord = currentWordRef.querySelectorAll(".correct");
            

            if (correctCharsInAWord.length === allCurrentChars.length) {
               setCorrectWords(correctWords + 1);
            }

            if (allCurrentChars.length <= currCharIdx) {
               allCurrentChars[currCharIdx - 1].classList.remove("current-right")
            }
            else {
               setMissedChars(missedChars + (allCurrentChars.length - currCharIdx))  //gives how many characters are missed 
               //remove cursor from inbetween
               allCurrentChars[currCharIdx].classList.remove("current")
            }

            //cursor should be visible at every 1st character of word
            wordsSpanRef[currWordIdx + 1].current.childNodes[0].className = "current";

            //current char become 0 if jumps to new word
            setCurrCharIdx(0);
            setCurrWordIdx(currWordIdx + 1);

            return;
         }
      }


      //if user press "BACKSPACE" key 
      if (e.keyCode === 8) // ocde for backspace
      {
         if (currCharIdx !== 0) {
            //if pressed "BACKSPACE" at last character of word
            if (allCurrentChars.length === currCharIdx) {
               if (allCurrentChars[currCharIdx - 1].className.includes('extra')) {
                  allCurrentChars[currCharIdx - 1].remove();
                  allCurrentChars[currCharIdx - 2].className += ' current-right'//cursor moving back
               }
               else {
                  allCurrentChars[currCharIdx - 1].className = 'current'
               }

               setCurrCharIdx(currCharIdx - 1)
               return;
            }

            allCurrentChars[currCharIdx].className = ''
            allCurrentChars[currCharIdx - 1].className = 'current'
            setCurrCharIdx(currCharIdx - 1)
         }
         return;
      }


      //if i typed extra word.... if no extra word is there ===> currCharIdx < allCurrentChars.length  
      if (currCharIdx === allCurrentChars.length) {
         let span = document.createElement("span");
         span.innerText = e.key;
         span.className = 'incorrect extra current-right'
         currentWordRef.append(span)
         setCurrCharIdx(currCharIdx + 1)

         allCurrentChars[currCharIdx - 1].classList.remove('current-right')
         setExtraChars(extraChars + 1)
         return;
      }



      //compare typed chaarcter with actual/ expected char
      if (e.key === allCurrentChars[currCharIdx].innerText) {
         allCurrentChars[currCharIdx].className = 'correct';
         setCorrectChars(correctChars + 1)
      }
      else {
         allCurrentChars[currCharIdx].className = 'incorrect';
         setIncorrectChars(incorrectChars + 1)
      }


      //move cursor left to right ... ie when cursor at last char of the word 
      if (currCharIdx + 1 === allCurrentChars.length) {
         allCurrentChars[currCharIdx].className += ' current-right'
      }
      else {
         allCurrentChars[currCharIdx + 1].className = 'current'
      }

      setCurrCharIdx(currCharIdx + 1)
   }




   useEffect(() => {
      focusInput()
      wordsSpanRef[0].current.childNodes[0].className = 'current'; //cursor visible at first letter of word at mount
   }, [])


   useEffect(() => {
      setCountDown(testTime);
      resetTest();
   }, [testTime])


   const focusInput = () => {
      //"current"===> is a property that is used to access the underlying DOM element or the target object associated with the ref.
      //In the context of React refs, current is a property that is used to access the underlying DOM element or the target object associated with the ref.
      //When you create a ref in React using React.createRef() or the useRef hook, it returns an object with a current property that initially points to null

      //When called, it uses the inputRef to access the input element (the one with ref={inputRef}) and then calls the focus method on it.
      // The focus method programmatically gives the input element focus, making it ready to accept keyboard input.
      // inputRef.current.focus()
      inputRef?.current?.focus?.();
   }


   function resetTest() {
      clearInterval(intervalId);
      setCountDown(testTime)
      setTestStart(false)
      setTestEnd(false)
      setCurrCharIdx(0)
      setCurrWordIdx(0)
      setCorrectChars(0)
      setIncorrectChars(0)
      setExtraChars(0)
      setMissedChars(0)
      setCorrectWords(0)
      resetWordSpanRefClassName()
      setWordsArray(generate(50))
      focusInput()
   }

   function resetWordSpanRefClassName() {
      wordsSpanRef.forEach((ref) => {
         if (ref.current) {
            Array.from(ref.current.childNodes).forEach((childNode) => {
               childNode.className = '';
            });
         }
      });
   
      if (wordsSpanRef[0].current) {
         wordsSpanRef[0].current.childNodes[0].className = 'current';
      }
   }





   return (
      <div>
         {
            testEnd ? <div><Stats correctChars={correctChars} incorrectChars={incorrectChars} missedChars={missedChars} extraChars={extraChars} wpm={calculateWPM()} accuracy={calculateAccuracy()} graphData={graphData} /><button onClick={resetTest} className='try-again'>Try Again</button></div>: 
         <>
         <Timer setTestTime={setTestTime} countDown={countDown} />
         <div className='type-box' onClick={focusInput}>
            <code className='words'>
               {
                  wordsArray.map((word, idx) => (
                     <span className='word' ref={wordsSpanRef[idx]}>
                        {
                           word.split('').map((char) => (
                              <span>{char}</span>
                           ))
                        }
                     </span>
                  ))
               }
            </code>
            <input type='text' className='hidden-input' onKeyDown={handleUserInput} ref={inputRef} />
         </div>
         </>
         }
         { 
         !testEnd && 
            <center className='btn-container'>
            <div onClick={resetTest} className='refresh'><AiOutlineReload /></div>
            <div className='buttons'>
               <button onClick={() => handleWord(10)}>10</button>
               <button onClick={() => handleWord(50)}>50</button>
               <button onClick={() => handleWord(80)}>80</button>
               <button onClick={() => handleWord(100)}>100</button>
               <span>(No. of Words)</span>
            </div>
         </center>
         }
      </div>
   )

}
export default TypingBox;


//"ref" attribute ===> allows to access & manipulate DOM element directly from your React component.