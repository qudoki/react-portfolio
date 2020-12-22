import logo from './circle.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          Github
        </a>
        <a
        className="App-link"
          href="https://reactjs.org"
          target="_blank"
          >
            Resumé
        </a>
        <a
        className="App-link"
          href="https://reactjs.org"
          >
            Projects
        </a>
        <a
        className="App-link"
          href="https://reactjs.org"
          >
            Profile
        </a>
        </nav>
      </header>
    </div>
  );
}

export default App;
