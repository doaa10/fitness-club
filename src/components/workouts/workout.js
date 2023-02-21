import React, { useEffect, useState } from 'react';
import './workout.css';
import gym from '../../assets/gym.png'
import { FetchDate,exerciseOptions } from '../../utilits/FetchData';

export const Workout = () => {

    const[types,setTypes]=useState([]);
    const[exercises,setExercises]=useState([]);
    const[bodyPart,setBody]=useState("");
    const[query,setQuery]=useState("");

  

   

    useEffect(()=>{
        const fetchExercisesData=async()=>{
            const bodyPartsData=await FetchDate('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            setTypes(['all',...bodyPartsData]);
        }
        fetchExercisesData();


    },[])

    const handleSearch=async()=>{
        if(query){
            const exercisesData=await FetchDate('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
        const searchedExercises=exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(query)
        ||exercise.target.toLowerCase().includes(query)
        ||exercise.equipment.toLowerCase().includes(query)
        ||exercise.bodyPart.toLowerCase().includes(query)
        );
        setQuery('');
        setExercises(searchedExercises);
        }
    }


    const searchHandler=(e)=>{
        e.preventDefault();
        setQuery(e.target.value.toLowerCase());
       
    }

    useEffect(()=>{
        const fetchExercisesData=async()=>{
            let exercisesData=[];
            if(bodyPart=="all"){
                exercisesData=await FetchDate('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
            }
            else{
                exercisesData=await FetchDate(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
            }
            setExercises(exercisesData)
        }
        fetchExercisesData();
    },[bodyPart])
   
  return (
    <div className='workouts' id='workouts'>
        <div className='workout-title'>
            <span>Awesome <span className='strok'>Exercises</span> You</span>
            <span>should know</span>
        </div>
        <div className='search-ex'>
            <input type='text' placeholder='search Exercises' value={query} onChange={searchHandler} ></input>
            <button onClick={handleSearch} >search</button>
        </div>

        <div className='bodyparts'>
            {
                types.map((type,id)=>(
                    <div className='body-container' key={id} onClick={()=>{
                        setBody(type);
                        
                        
                    }} >
                <img src={gym} alt='gym'></img>
                        {type}
                        </div>
                ))
            }
        </div>
        <h1 className='ex-tit'>show results</h1>
        <div className='exercises'>
         
            {
                exercises.map((exercise,id)=>(
                    <div className='cardEx' key={id}>
                         <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                        <div className='ex-btns'>
                        <button>{exercise.bodyPart}</button>
                         <button>{exercise.target}</button>
                         </div>
                         <span>{exercise.name}</span>
                    </div>

                ))
            }
        </div>

    </div>
  )
}
