import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { useDispatch, useSelector } from 'react-redux'
import Hero from './components/hero'

function App() {



  return (
    <div className='font-primary'>
      <Header></Header>
      <Hero></Hero>
    </div>
  )
}

export default App
