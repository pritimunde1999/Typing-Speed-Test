import React from 'react';
import { AiFillGithub,AiFillLinkedin, AiFillMail, AiOutlineInstagram } from "react-icons/ai";

import ThemeColor from './ThemeColor';

const Footer = () => {
  return (
    

        <div className='footer'>
             <div className='social-media'>
                 <AiFillGithub/>
                 <AiFillLinkedin/>
                 <AiFillMail/>
                 <AiOutlineInstagram/>
             </div>

              <ThemeColor/>
        </div>
   
  )
}

export default Footer