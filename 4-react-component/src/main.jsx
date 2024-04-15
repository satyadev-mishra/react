import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const MyApp=()=>{
  return <h1>I'm Component </h1>
}
ReactDOM.createRoot(document.getElementById('root')).render(

    // MyApp()//this MyApp is simply a function which is simply return a jsx
  <App/>
)
