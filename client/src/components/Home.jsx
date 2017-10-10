// import React from 'react'

// const Home = () => (
//   <div>
//     <h1>Welcome to the Tornadoes Website!</h1>
//   </div>
// )

// export default Home



// import React from 'react';

import React from 'react';

import PropTypes from 'prop-types';


import { Card, CardTitle } from 'material-ui/Card';
import Auth from '../modules/Auth';
import DashboardPage from '../containers/DashboardPage.jsx';
import LanguageSetting from '../modules/LanguageSetting';


class Home extends React.Component {

  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      currentLanguage: 'Eng',
      cardtitle: "Website Title",
      cardsubtitle: "This is the home page. Log in to see the hidden content",
      
    };

    //this.cardtitleP = "";

  }
  
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

  render() {

    // var maintitle = localStorage.getItem('currentLanguage') == 'Eng' ? 'Website title':'网站标题';
    // var subtitle = localStorage.getItem('currentLanguage') == 'Eng' ?  'This is the home page. Log in to see the hidden content':
    // '这里是主页，请登录查看更多内容';


    return (
      <div>
        {/* <div>
          {localStorage.getItem('currentLanguage')}
        </div>   */}
        {Auth.isUserAuthenticated() == false ? (
          
      <Card className="container">
        {/* <CardTitle title="React Application" subtitle="This is the home page. Log in to see the hidden content" /> */}

          <CardTitle title={this.props.cardtitleP} subtitle={this.props.cardsubtitleP} />  

          {/* <CardTitle title={maintitle} subtitle={subtitle} />   */}
        
      </Card>):
      (
        <DashboardPage/>
      )}
      </div>    
    
    )


  }  



}


// const Home = () => (

//   <div>
    
//     {Auth.isUserAuthenticated() == false ? (
      
//   <Card className="container">
//     <CardTitle title="React Application" subtitle="This is the home page. Log in to see the hidden content" />
//   </Card>):
//   (
//     <DashboardPage/>
//   )}
//   </div>
// );

Home.propTypes = {
  cardtitleP: PropTypes.string.isRequired,
  cardsubtitleP: PropTypes.string.isRequired
  // errors: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired
};



export default Home;