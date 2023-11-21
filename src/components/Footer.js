import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineInstagram } from "react-icons/ai";

import ThemeColor from './ThemeColor';

const Footer = () => {
      return (


            <div className='footer'>
                  <div className='social-media'>
                        <a href="https://github.com/pritimunde1999" target="_blank" rel="noopener noreferrer">
                              <AiFillGithub />
                        </a>
                        <a href="https://linkedin.com/in/priti-munde/" target="_blank" rel="noopener noreferrer">
                              <AiFillLinkedin />
                        </a>
                        <a href="mailto:pritimunde0109@gmail.com">
                              <AiFillMail />
                        </a>
                        {/* <a href="https://instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
                              <AiOutlineInstagram />
                        </a> */}
                  </div>

                  <ThemeColor />
            </div>

      )
}

export default Footer