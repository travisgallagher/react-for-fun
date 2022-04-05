
import { useState } from 'react';
import './App.css';
import Block from './components/Block';
import Classcomponent from './components/Classcomponent';

function App() {
// Input JS
useState() 



const hello =   "Hello world"




// JSX below: HTML in application
// Input HTML
  return <div>
    <h1> Hello </h1>
    <h2>{hello}</h2>
    <Block name={`john`} />
    <Block name={`billy`} />
    <Block name={`travis`} />
    <Classcomponent name={"stuff"}/>
  </div>; 
}

export default App;
