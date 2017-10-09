import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Roster from './Roster.jsx'
import Schedule from './Schedule.jsx'
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      {/* <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/> */}

      {/* {Auth.isUserAuthenticated() ? (
      <div>    
      <Route path='/login' component={LoginPage}/>
      </div>      
      ):
      (
      <div>    
      <Route path='/login' component={LoginPage}/>
      <Route path='/signup' component={SignUpPage}/>
      </div>      
      )

      } */}


      <Route path='/login' component={LoginPage}/>
      <Route path='/signup' component={SignUpPage}/>

    </Switch>
  </main>
)

export default Main