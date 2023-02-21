import React from 'react'
import './plan.css';
import plansData from '../../data/plansData'
import tick from '../../assets/tick.png'
export const Plan = () => {
  return (
    <div className='plan' id='plan'>
        <div className='plan-title'>
        <span> Choose A </span>
        <span> Package </span>
        <span> For Yourself</span>
        </div>
        <div className='plansPac'>
            {
                plansData.map((plan)=>(
                    <div className='plan-card'>
                        {plan.icon}
                       <div className='info-plan'>
                       <span>{plan.name}</span>
                       <span>${plan.price}</span>
                        </div>
                      
                       <ul>
                        {plan.features.map((feat)=>(
                            
                            <li><img src={tick}></img>{feat}</li>
                        ))}
                       </ul>
                       <button className='plan-btn'>join now</button>

                        </div>
                ))
            }
        </div>
    </div>
  )
}
