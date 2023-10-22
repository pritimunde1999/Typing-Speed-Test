import React from 'react';
import { AiFillGithub,AiFillLinkedin, AiFillMail, AiOutlineInstagram } from "react-icons/ai";
import { GrRefresh } from "react-icons/gr";
import ThemeColor from './ThemeColor';

const Footer = ({setTheme}) => {
  return (
    <div className='footer'>
        <div className='refresh'><span><GrRefresh/></span></div>
        <div className='buttons'>
            <button>10</button>
            <button>50</button>
            <button>80</button>
            <button>100</button>
            <span>(No. of Words)</span>
        </div>

        <div className='footer-items'>
             <div className='social-media'>
                 <AiFillGithub/>
                 <AiFillLinkedin/>
                 <AiFillMail/>
                 <AiOutlineInstagram/>
             </div>

              <ThemeColor setTheme={setTheme}/>
        </div>
    </div>
  )
}

export default Footer