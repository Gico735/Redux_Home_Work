import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Page_1, Page_2 } from './components/Pages';
import './App.css';

const App = () => (

  <div className='App'>

    <div className='header'>
      <Link  to='/' ></Link>
      <Link  to='/page_2' ></Link>
    </div>

    <div className='main'>
      <Route exact path='/' component={Page_1}></Route>
      <Route exact path='/page_2' component={Page_2}></Route>
    </div>

  </div>
)

export default App;
