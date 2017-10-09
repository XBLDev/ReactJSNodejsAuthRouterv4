import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth';




class Header extends React.Component {

  constructor(props) {
    super(props);

    // set the initial component state
    // this.state = {
    //   redirect: false,
    //   errors: {},
    //   user: {
    //     email: '',
    //     name: '',
    //     password: ''
    //   }
    // };

    this.onLogOutClicked = this.onLogOutClicked.bind(this);
  }    

  onLogOutClicked()
  {
    Auth.deauthenticateUser();
    
  }

  render() {
    return (
      // <div>
      //   signup
      // </div>
    <div className="top-bar">
        <div className="top-bar-left">
                <Link to="/">React App</Link>   
        </div>


        <div>
        {Auth.isUserAuthenticated() == true ? (

            <div className="top-bar-left">
                Welcome back {JSON.parse(localStorage.getItem('usrname')).name}!
            </div>  
            ):
            (

            <div>
            </div>  

            )}

        </div>    

        {Auth.isUserAuthenticated() == false ? (
        <div className="top-bar-right">
                 <Link to="/login">Log in</Link> 
                <Link to="/signup">Sign up</Link>   
        </div>
        ):
        (
        <div className="top-bar-right">
                 <Link to="/login" onClick={this.onLogOutClicked}>Log out</Link> 
        </div>
        )
        }



    </div>    
    );
  }


}


// The Header creates links that can be used to navigate
// between routes.
// const Header = () => (
//     <div className="top-bar">
//         <div className="top-bar-left">
//                 <Link to="/">React App</Link>   
//         </div>


//         {Auth.isUserAuthenticated() == false ? (
//         <div className="top-bar-right">
//                  <Link to="/login">Log in</Link> 
//                 <Link to="/signup">Sign up</Link>   
//         </div>
//         ):
//         (
//         <div className="top-bar-right">
//                  <Link to="/login">Log out</Link> 
//         </div>
//         )
//         }



//     </div>    
// //   <header>
// //     <nav>
// //       <ul>
// //         <li><Link to='/'>Home</Link></li>
// //         <li><Link to='/roster'>Roster</Link></li>
// //         <li><Link to='/schedule'>Schedule</Link></li>
// //       </ul>
// //     </nav>
// //   </header>
// )

export default Header