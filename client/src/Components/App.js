import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import 'regenerator-runtime/runtime.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '../css/App.css'

import Header from './Header'
import Partners from './Partners'
import About from './About'
import Contact from './Contact'

import { actions } from '../store'
import Nav from './Nav'

function App() {
  const dispatch = useDispatch()

  const action = useSelector((state) => state.action)
  const { title } = action

  useEffect(() => {
    dispatch(actions())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path='/partners'>
          <Partners />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Header />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
