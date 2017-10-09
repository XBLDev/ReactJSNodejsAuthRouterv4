import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { browserHistory, Router } from 'react-router';
// import routes from './routes.js';
import { BrowserRouter } from 'react-router-dom'
import App from './components/start.jsx';


// remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();

// ReactDom.render((
//   <MuiThemeProvider muiTheme={getMuiTheme()}>
//     <Router history={browserHistory} routes={routes} />
//   </MuiThemeProvider>), document.getElementById('react-app'));

// ReactDom.render((
//   <MuiThemeProvider muiTheme={getMuiTheme()}>}>
//     <Router history={browserHistory} routes={routes} />
//   </MuiThemeProvider>), document.getElementById('react-app'));

ReactDom.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('react-app'));










// import React from 'react';
// import ReactDom from 'react-dom';
// import HomePage from './components/HomePage.jsx';
// import Base from './components/Base.jsx';

// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// // ReactDom.render(<MuiThemeProvider><HomePage /></MuiThemeProvider>, document.getElementById('react-app'));
// ReactDom.render(<Base />, document.getElementById('react-app'));