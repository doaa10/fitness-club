import React, { useEffect, useState } from 'react'
import { bmiOptions, FetchDate } from '../../utilits/FetchData';
import './bmi.css';
export const Bmi = () => {
    const[weight,setWeight]=useState('');
    const[height,setHeight]=useState('');
    const[age,setAge]=useState('');
    const[bmi,setBmi]=useState('');
    const[health,setHealth]=useState('')
    const[healthy_bmi_range,setHealthy_bmi_range]=useState('');





    const fetchBmiData=async()=>{
        const bmidata=await FetchDate(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,bmiOptions);
        setBmi(bmidata.data.bmi);
        setHealth(bmidata.data.health);
        setHealthy_bmi_range(bmidata.data.healthy_bmi_range)
      
    }
   

         
  return (
    <div className='bmi' id='Bmi'>
      <h1>BMI Calculator</h1>
        <div className='container'>
            <form>

            <label>weight</label>
            <input type='text' value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
            <label>height</label>
            <input type='text' value={height} onChange={(e)=>setHeight(e.target.value)}></input>
            <label>age</label>
            <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}></input>

             <button onClick={(e)=>{e.preventDefault();  fetchBmiData();}}>show result</button> 
            


              <div className='res'>
                <span>bmi: {bmi}</span>
              <span>healthy_bmi_range: {healthy_bmi_range}</span>
              <span>health:  {health}</span>
              </div>
            </form>


        </div>

    </div>
  )
}
