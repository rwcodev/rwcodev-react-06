import '../App2.css'
import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault() 
    dispatch(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (    
    <div className='test11'>
    <img src="src/assets/pokedex_top_name.png" />
      <h1 className='test12'>!Hello Pokemon trainer¡</h1>
      <p className='test13'>To start, please give me your name.</p>
      <form className='test14' onSubmit={handleSubmit}>
        <input className='test15' ref={inputTrainer} type="text" />
        <button className='test16' >Comenzar</button>
      </form>
    </div>

  )
}

export default HomePage
