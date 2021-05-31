import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import 'regenerator-runtime/runtime.js'

import '../css/App.css'

import Header from './Header'

import { actions } from '../store'

function App() {
  const dispatch = useDispatch()

  const action = useSelector((state) => state.action)
  const { title } = action

  useEffect(() => {
    dispatch(actions())
  }, [dispatch])

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
