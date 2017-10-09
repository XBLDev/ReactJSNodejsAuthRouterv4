// import React from 'react'

// const Home = () => (
//   <div>
//     <h1>Welcome to the Tornadoes Website!</h1>
//   </div>
// )

// export default Home



import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Auth from '../modules/Auth';
import DashboardPage from '../containers/DashboardPage.jsx';

const Home = () => (

  <div>
    
    {Auth.isUserAuthenticated() == false ? (
      
  <Card className="container">
    <CardTitle title="React Application" subtitle="This is the home page. Log in to see the hidden content" />
  </Card>):
  (
    <DashboardPage/>
  )}
  </div>
);

export default Home;