import React from 'react'
import logo from '../../assets/logo.png'
import './nav.css'
export const Nav = () => {
  return (
    <div className='nav'>
        <div className='left'>
        <div className='logo'>
            <img src={logo} alt='logo'></img>
        </div>
        <div className='links'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About us</a></li>
                <li><a href='#workouts'>Workouts</a></li>
                <li><a href='#Bmi'>BMI CALC</a></li>
                <li><a href='#membership'>MemeberShip</a></li>
            </ul>
        </div>
        </div>

      
        
       
    </div>
  )
}
