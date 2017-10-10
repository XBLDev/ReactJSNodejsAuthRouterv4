import React from 'react';

import PropTypes from 'prop-types';


import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Roster from './Roster.jsx'
import Schedule from './Schedule.jsx'
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';
import LanguageSetting from '../modules/LanguageSetting';



class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: localStorage.getItem('currentLanguage'),
      // localStorage.
      
    };

  }
  
  render() {
    var title = localStorage.getItem('currentLanguage') == 'Eng' ? 'Website title':'网站标题';
    var subtitle = localStorage.getItem('currentLanguage') == 'Eng' ? 
    'This is the home page. Log in to see the hidden content':
    '这里是主页，请登录查看更多内容';
    // console.log();

    // let homeRoute = <Home cardtitleP={localStorage.getItem('currentLanguage')} cardsubtitleP={localStorage.getItem('currentLanguage')}/>;
    // let homeRoute = <Route exact path='/' render={() => <Home cardtitleP={localStorage.getItem('currentLanguage')} cardsubtitleP={localStorage.getItem('currentLanguage')}/>}/>;   

    return (
          <main>

            <Switch>
                 {/* <Route exact path='/' component={Home}/>    */}
              {/* <Route exact path='/' render={() => <Home cardtitleP="Website Title" cardsubtitleP="This is the home page. Log in to see the hidden content"/>}/> */}
                  <Route exact path='/' render={() => <Home cardtitleP={title} cardsubtitleP={subtitle}/>}/>    
                {/* <Route exact path='/' render={renderTarget}/>   */}
              {/* {homeRoute} */}

              {/* <Router path="/somePath" render={() => <SomeComponent someProp={prop} />} />       */}
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


  }  



}


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
// const Main = () => (

  
//   <main>
//     <Switch>
//       {/* <Route exact path='/' component={Home}/> */}
//       <Route exact path='/' render={() => <Home cardtitleP="Website Title" cardsubtitleP="This is the home page. Log in to see the hidden content"/>}/>
// {/* <Router path="/somePath" render={() => <SomeComponent someProp={prop} />} />       */}
//       {/* <Route path='/roster' component={Roster}/>
//       <Route path='/schedule' component={Schedule}/> */}

//       {/* {Auth.isUserAuthenticated() ? (
//       <div>    
//       <Route path='/login' component={LoginPage}/>
//       </div>      
//       ):
//       (
//       <div>    
//       <Route path='/login' component={LoginPage}/>
//       <Route path='/signup' component={SignUpPage}/>
//       </div>      
//       )

//       } */}


//       <Route path='/login' component={LoginPage}/>
//       <Route path='/signup' component={SignUpPage}/>

//     </Switch>
//   </main>
// )

// Main.propTypes = {
//   langsetting: PropTypes.string.isRequired,
//   // cardsubtitleP: PropTypes.string.isRequired
//   // errors: PropTypes.object.isRequired,
//   // user: PropTypes.object.isRequired
// };


export default Main