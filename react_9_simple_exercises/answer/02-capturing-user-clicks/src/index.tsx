import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// named function
function showAlert (): void {
  alert("The button was clicked!")
  alert()
  alert(1)
  alert(true)
  alert({name: "Michael"})
}

// arrow function or anonymous function
/*
const showAlert = () => {
  alert("The button was clicked!")
}
*/

// constant function
/*
const showAlert = function () {
  alert("The button was clicked!")
}
*/

// passing a function
const btn =  <button onClick={(event) => { showAlert()}}>Click Me</button>

// passing an inline anonymous function
// const btn =  <button onClick={() => { alert("The button was clicked!") }}>Click Me</button>

// passing an empty fuction
// const btn =  <button onClick={() => {  }}>Click Me</button>

// passing undefined
// const btn =  <button onClick={undefined}>Click Me</button>

// passing undefined (withouth adding the optional prop)
// const btn =  <button>Click Me</button>

// catching the event
/*
const btn =  <button onClick={(event) => {
  console.log("# event.target:", event.target)
  showAlert()
}}>Click Me</button>
*/


const rootEl = document.getElementById('root')

const root = ReactDOM.createRoot(rootEl as Element)

root.render(btn)
