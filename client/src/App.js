import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className = "login-register-box">
        <RegisterForm />
        <LoginForm />
      </div>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    </div>
  );
}

export default App;
