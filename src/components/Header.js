import React from 'react'
import { BsFillKeyboardFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className='header'>
        <div className='left'>
            <h1>TypeCat</h1>
            <div><BsFillKeyboardFill/></div>
        </div>
        <div className='right'>
            <div><CgProfile/></div>
        </div>
    </div>
  )
}

export default Header