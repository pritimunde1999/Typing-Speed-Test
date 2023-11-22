import React, { useEffect,useCallback } from 'react'
import Graph from './Graph'
import { db, auth } from '../firebaseConfig';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';

const Stats = ({correctChars,incorrectChars,missedChars,extraChars,wpm,accuracy,graphData}) => {

    const [user] = useAuthState(auth);
    console.log(user)
    console.log(auth.currentUser)
    let timeSet = new Set();
    const newGraph = graphData.filter(i => {
        if (!timeSet.has(i[0])) {
            timeSet.add(i[0]);
            return i;
        }
    })

   

    function pushToDB(){
        if (isNaN(accuracy)) {
            toast.error('Invalid test')
            return;
        }
        
        const resultRef = db.collection('Results');
        const {uid} = auth.currentUser;
        resultRef.add(
            {
                wpm : wpm,
                accuracy : accuracy,
                timeStamp : new Date(),
                Characters : `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
                uid : uid
            }
        ).then((res)=>{
            toast.success("Result Saved")
        }).catch((err)=>{
            console.log(err)
            toast.error(err.message)
        })
    }

   
    useEffect(()=>{
        if(auth.currentUser){
            pushToDB();
        }
        else{
            toast.warning("Login/Signup to save the result")
        }
    },[auth.currentUser])

    return (
    <div className="stats-box">
    <div className="left-stats">
        <div className="title">WPM<span>(Words per Min.)</span></div>
        <div className="subtitle">{wpm}</div>
        <div className="title">Accuracy</div>
        <div className="subtitle">{accuracy}%</div>
        <div className="title">Characters<br/><span>(correct/incorrect/missed/extra chars)</span></div>
        <div className="subtitle">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
    </div>
    <div className="right-stats">
        <Graph graphData={newGraph} />
    </div>
   
</div>
  )
}

export default Stats