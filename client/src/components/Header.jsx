import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth';
import LanguageSetting from '../modules/LanguageSetting';
import {Redirect} from 'react-router-dom';



class Header extends React.Component {

  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      LangBtnText: '中文版',
      SiteText: 'WebSite Name',
      loginText: 'Log In',
      signupText: 'Sign up',
      userWelcomeText: 'Hello ',
      redirect: false,
      // websiteTitle: 'React Application',
      // websit
      // redirect: false,
      // errors: {},
      // user: {
      //   email: '',
      //   name: '',
      //   password: ''
      // }
    };

    this.onLogOutClicked = this.onLogOutClicked.bind(this);
    this.onLanguageSettingClicked = this.onLanguageSettingClicked.bind(this);
    // LanguageSetting.setEng();
  }    

  onLogOutClicked()
  {
    Auth.deauthenticateUser();
    
  }

  onLanguageSettingClicked()
  {
    console.log(localStorage.getItem('currentLanguage'));
    if(localStorage.getItem('currentLanguage') == 'Eng')
    {
      localStorage.setItem('currentLanguage', '中文')
      //  LanguageSetting.setChi();
       this.setState({LangBtnText:'English'});

       this.setState({SiteText:'网站名称'});

       this.setState({loginText:'登录'});
       this.setState({singupText:'注册'});
       this.setState({userWelcomeText:'你好 '});
       this.setState({redirect: true});
    }
    else
    {
      localStorage.setItem('currentLanguage', 'Eng');
       this.setState({LangBtnText:'中文版'});

       this.setState({SiteText:'WebSite Name'});

       this.setState({loginText:'Log in'});
       this.setState({singupText:'Sign up'});
       this.setState({userWelcomeText:'Hello '});
       this.setState({redirect: true});

    }

  }


  render() {
    return (
      // <div>
      //   signup
      // </div>

      

    <div className="top-bar">

      

        <div className="top-bar-left">
                <Link to="/">{this.state.SiteText}</Link>   
        </div>


        <div>
        {Auth.isUserAuthenticated() == true ? (

            <div className="top-bar-left">

                  {this.state.userWelcomeText} {JSON.parse(localStorage.getItem('usrname')).name}!

            </div>  
            ):
            (

            <div>
            </div>  

            )}

        </div>

        <div className="top-bar-left">
            {/* <button onClick={this.onLanguageSettingClicked}> */}
              <Link to="/" onClick={this.onLanguageSettingClicked}>{this.state.LangBtnText}</Link>   

              {/* {this.state.LangBtnText} */}
            {/* </button> */}
        </div>  

        {/* <div className="top-bar-left" onClick={this.onLanguageSettingClicked}>
            中文版
        </div>       */}


        {Auth.isUserAuthenticated() == false ? (
        <div className="top-bar-right">
                 <Link to="/login">{this.state.loginText}</Link> 
                <Link to="/signup">{this.state.singupText}</Link>   
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