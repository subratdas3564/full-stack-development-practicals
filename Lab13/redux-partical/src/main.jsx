import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import {provider} from 'react-redux'
import './index.css'
import studentReducer from './feature/student/studentSlice.js'
import App from './App.jsx'

const store= configureStore({
  reducer:{
    student: studentReducer,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <provider store={store}>
      <App/>
    </provider>
  </StrictMode>,
)
