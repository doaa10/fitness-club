import './App.css';
import { About } from './components/about/about';
import { Bmi } from './components/Bmi/bmi';
import Home from './components/home/Home';
import { Membership } from './components/membership/Membership';
import { Plan } from './components/Plan/Plan';
import { Workout } from './components/workouts/workout';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';




function App() {
  return (
    
   <div className='App'>
    <Home/>
    <About/>
    <Plan/>
    <Workout/>
    <Membership/>
    <Bmi/>
    <Footer/>
   </div>
    
  );
}

export default App;
