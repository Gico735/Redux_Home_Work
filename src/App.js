import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Page1, Page2 } from './components/Pages';
import './App.css';

const App = () => (

  <div className='App'>

    <div className='header'>
      <Link  to='/' >Page1</Link>
      <Link  to='/page_2' >Page2</Link>
    </div>

    <div className='main'>
      <Route exact path='/' component={Page1}></Route>
      <Route path='/page_2' component={Page2}></Route>
    </div>

  </div>
)

export default App;
