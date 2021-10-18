import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Chat from './components/Chat';

function App() {

  let currentUser = localStorage.getItem("user_details");

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          {currentUser ? 
          <Route path="/chat">
            <Chat />
          </Route>
          :
          <Route path="/">
            <div className = "login-register-box">
              <RegisterForm />
              <LoginForm />
            </div>
          </Route>
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
