import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {useLocation} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/home/Home.jsx';
function App() {
 

  return (
   <BrowserRouter>
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/projects' exact component={Projects} />
       <Route path='/design' exact component={Design} />
       <Route path='/links' exact component={Links} />
       <Route path='/resources' exact component={Resources} />
       <Route path='/hackable' exact component={Hackable} />
     </Switch>
   </BrowserRouter>
  ).if(err(console.log('err in app.jsx')))
}

export default App
