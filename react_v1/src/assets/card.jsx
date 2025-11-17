import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Card() {
  /*I am declaring a variable x and assigning it the value 2*/
const[x,setx] =useState(0);
{/* useState is a react hook(it allows you to change and update the variable with react automatically changing it to the browser*/}

function add(){
  setx(x+1);
}

  return (
    <>
    <h1> This is my first day with react </h1>
    <p> Jordan Idrovo</p>
    <div>
      <p> This is my Card </p>
      {/*Note 1: In order to use JS inside js, we must inclose everything inside calibrases.*/}
      <p> {x} </p>
      {/*Note 2: Instead of using getElementById and adding an event listener, I can directly use onClick. */}
      {/* Note 3: When calling a function inside jsc, you don't put parenthesis() */}
      <button onClick={add}> Increase Number </button>
    </div>
    </>
  )
}

export default App
