import './App.css';

// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LoginForm />
    </div>
  );
}

export default App;
