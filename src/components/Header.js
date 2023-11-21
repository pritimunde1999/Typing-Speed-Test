import React from 'react'
import { BsFillKeyboardFill } from "react-icons/bs";
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const naviagte = useNavigate();
  return (
    <div className='header'>
        <div className='left'>
            <h1 onClick={()=>naviagte('/')} style={{cursor:'pointer'}}>TypeCat</h1>
            <BsFillKeyboardFill onClick={()=>naviagte('/')} style={{cursor:'pointer'}} className='keyboard'/>
        </div>
        <div className='right'>
           <Profile/>
        </div>
    </div>
  )
}

export default Header