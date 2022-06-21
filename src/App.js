import logo from './logo.svg';
import './App.css';

//Components 
import AboutPage from './Components/About/AboutPage';


function App() {
  return (
    <div className="App">
      <Route exact path="/About">
        <AboutPage />
      </Route> 
    </div>
  );
}

export default App;
