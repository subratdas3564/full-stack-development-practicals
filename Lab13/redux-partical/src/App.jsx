import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import{userSelector, useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import{decrement, increment, incrementByAmount, reset} from './app/feature/counterSlice';
function App(){
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  return(
    <>
    my redux application
    <p> you click count()times </p>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <button onClick={()=>dispatch(incrementByAmount())}>IncrementByAmount</button>
    </>
  )
}


