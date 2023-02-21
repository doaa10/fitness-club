import React from 'react'
import { Nav } from '../nav/Nav'
import heart from '../../assets/heart.png';
import hero from '../../assets/hero_image.png';
import back from '../../assets/hero_image_back.png';
import calories from '../../assets/calories.png'
import './home.css'
export default function () {
  return (
    <div className='home'>
        <div className='leftSide'>
            <Nav/>
          
        <div className='container' id="home">
        <div className='head'>
            <p><span>THE BEST</span>
            FITNESS CLUB IN THE TOWN
            </p>

          </div>
          <div className='title'>
            <span className='t1'>SHAPE </span>
            <span className='t2'>YOUR</span> 
                <br></br>
            <span> IDEAL BODY</span>
               </div>
               <p className='para'>Empower yourself to make the changes you need to make</p>

               <div className='statistics'>
                <div className='s1'>
                    <span>+50</span>
                    <span>expert coaches</span>
                </div>
                <div className='s2'>
                    <span>+850</span>
                    <span>members joined</span>
                </div>
                <div className='s3'>
                    <span>+30</span>
                    <span>fitness prorams</span>
                </div>

               </div>
               <div className='btns'>
                <button className='btn'>Get started</button>
                <button className='btn2'>learn more</button>
               </div>
               <div className='calo'>
                <div className='calImg'>
                    <img src={calories} alt="calories"></img>
                </div>
                <div className='txt'>
                <span>Calories </span>
                <span>Burned</span>
                <span>220</span>
                <span>Kcal</span>
                </div>
            
           </div>
        </div>


         
        </div>
        <div className='rightSide'>
           <button className='btn'>Sign In</button>
           

           <div className='heart'>
            <img src={heart} alt='heart'></img>
            <p>Heart Rate</p>
            <h2>116 bmp</h2>
           </div>

           <div className='imgs'>
            <img src={hero} className="hero" alt="hero"></img>
            <img src={back}  className="back" alt="back"></img>
           </div>

         
        </div>
    </div>
  )
}
