import logo from './circle.png';
import background from './background-gradient.png';
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
          <img src={logo} className="small-logo" alt="bullet" />
          Github
        </a>
        <a
        className="App-link"
          href="https://reactjs.org"
          target="_blank"
          >
          <img src={logo} className="small-logo" alt="bullet" />
            Resumé
        </a>
        <a
        className="App-link"
          href="https://reactjs.org"
          >
          <img src={logo} className="small-logo" alt="bullet" />
            Projects
        </a>
        <a
        className="App-link"
          href="https://reactjs.org"
          >
          <img src={logo} className="small-logo" alt="bullet" />
            Profile
        </a>
        </nav>
      </header>
    </div>
  );
}

export default App;
