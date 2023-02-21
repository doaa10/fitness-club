import React from 'react';
import './about.css';
import programsData from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import wom from '../../assets/wom.jpg';
import image4 from '../../assets/image4.png';
import man from'../../assets/man.jpg';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

export const About = () => {
  return (
    <div className='about'>
        <div className='about-header'>
            <span className='ash'>Explore our</span>
            <span className='ah'> programs</span>
            <span className='ash'>to shape you</span>
        </div>

        <div className='programs'>
            {
                programsData.map((program)=>(
                    <div className='program-container'>
                 {program.image}
                        <span className='card-tit'>{program.heading}</span>
                        <span className='card-para'>{program.details}</span>
                        <div className='join'>   
                        <span> join Now</span>
                        <img src={RightArrow}/>
                        </div>
                        </div>

                ))
            }
        </div>
        <div className='about-goals'>
            <div className='goals-head'>
                <span className='strik'>what</span>
                <span className='normal'>is your goal ?</span>
            </div>
            <div className='goal-cont'>
                <div className='goal-left'>
                <div className='l-images'>
                <img src={wom}></img>
                <img src={image4}></img>
                </div>
                <div className='goals-text'>
                    <p>in here we will help you to shape and build your ideal body and live up your life to fullest
                    </p>
                    <p>Don’t wait for tomorrow to motivate you to work out! You will find another excuse to quit. Start now!</p>

                </div>


                </div>
                <div className='goal-right'>
                <img src={man} alt='man'></img>
                    <div className='trans'>
                        <span>Body Building</span>
                        <button className='tran-btn'><span><a href='#plan'>see my plan</a></span> <BsArrowUpRightCircleFill className='icon'/></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
