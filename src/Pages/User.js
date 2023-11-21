import React, { useEffect, useState } from 'react'
import UserInfo from '../components/UserInfo'
import Header from '../components/Header'
import { useAuthState } from 'react-firebase-hooks/auth';
import { db,auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Graph from '../components/Graph';
import UserTable from '../components/UserTable';

const User = () => {
    const [data,setData] = useState([]);
    const [user,loading] = useAuthState(auth);
    const [dataLoading,setDataLoading] = useState(true)
    const [graphData, setGraphData] = useState([]);
    const naviagte = useNavigate();

    function fetchData(){
        console.log("entered")
        const { uid } = auth.currentUser;
        const resultRef = db.collection('Results')
       
        let tempData = [];
        let tempGraphData = [];

        resultRef.where('uid','==',uid)
        .orderBy('timeStamp','desc')
        .get()
        .then((snapshot)=>{
            snapshot.docs.map((doc)=>{
                console.log("inside log")
                tempData.push({...doc.data()});
                tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(',')[0],doc.data().wpm])
                return null;
            });
            setData(tempData);
            setGraphData(tempGraphData.reverse())
            setDataLoading(false)
        })
        .catch((err)=>{
            console.error('Error fetching user data:', err);
        })
    }


    useEffect(()=>{
        if(!loading){
            if(!user){
                naviagte('/');
            }
            else
            {
                fetchData();
            }
        }
    },[loading,naviagte,user])

    if (loading || dataLoading) {
        return <CircularProgress size={70} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    }

  return (
    <div>
        <Header/>
        <div className='canvas'>
           <UserInfo totalTests={data.length} />
           <Graph className='graph' graphData={graphData}/>
           <UserTable data={data} />
        </div>
    </div>
  )
}

export default User