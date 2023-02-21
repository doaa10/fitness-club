import React from 'react';
import './footer.css'
import logo from '../../assets/logo.png'
import { SocialIcon } from 'react-social-icons';


export const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-text'>
            <div className='txt1'>
                <span>Ready to</span>
                <span>level up</span>
            </div>
            <div className='txt2'>
                <span>
                    Your body
                </span>
                <span>
                    with us ?
                </span>
            </div>

        </div>
        <div className='footer-mail'>
            <input type='email' placeholder='enter your email here...'></input>
            <button>join now</button>

        </div>
        </div>
        
        <div className='social'>
            <img src={logo}></img>
            <div className='so-icons'>
            <SocialIcon network='twitter' bgColor='#fff' fgColor='darkturquoise'/>
            <SocialIcon network='facebook'  bgColor='#fff' fgColor='blue'/>
            <SocialIcon network='instagram' bgColor='#fff'  fgColor='red' />
            </div>
            

        </div>
        <div class="copyRight-sec">
        2022 © All rights reserved by <a href="#">  Duaa elsayed & fatma hesham </a>
    </div>
        </>
        
  )
}
