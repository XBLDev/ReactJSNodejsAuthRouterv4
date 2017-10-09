# ReactJSNodejsAuthRouterv4
ReactJS + Nodejs + React Router V4 user authentication, based on the code from tutorial: https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt, and the 
routing/redirect idea comes from: https://reacttraining.com/react-router/web/example/auth-workflow

Comment 09/10/2017, 9:00pm:

The original tutorial is not working with the latest versions of ReactJS, React-Router-Rom, webpack, and Material-UI. The version here
is what I came up with after 

Basically what have to be changed:

1. The way the proptype is specified/imported;
2. The top level element needs to be BrowserRouter instead of Router;
3. The app needs a MuiThemeProvider so that the Mateiral-UI can work properly;
4. Router can no longer do: this.context.router.replace, it will give an error saying replace does not exist. Instead use
Redirect from React-Router-dom to do redirect after authentication succeed;
5. The structure of the app has to be changed, all the page renderings are now conditional based on the user authentication state from Auth.js;
6. Since this version is not using routes to define what happens when an URL is entered, onClick of Link on logout de-auth an user.

This version is tested on Amazon EC2 with a mongodb on mlab, and I will try build another version of it with mysql/msSQL if possible.

The package versions:

├── babel-core@6.26.0
├── babel-loader@7.1.2
├── babel-preset-es2015@6.24.1
├── babel-preset-react@6.24.1
├── bcrypt@1.0.3
├── body-parser@1.18.2
├── express@4.16.1
├── jsonwebtoken@8.0.1
├── material-ui@0.19.3
├── mongoose@4.12.1
├── nodemon@1.12.1
├── passport@0.4.0
├── passport-local@1.0.0
├── prop-types@15.6.0
├── react@16.0.0
├── react-dom@16.0.0
├── react-router@4.2.0
├── react-router-dom@4.2.2
├── react-tap-event-plugin@3.0.2
├── sql@0.78.0
├── validator@9.0.0
└── webpack@3.6.0


