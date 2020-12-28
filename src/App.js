import logo from "./circle.png";
// import background from "./background-gradient.png";
import "./App.css";
import "./pages/About/index";
import "./pages/Project/index";
// import "./components/CardAbout";
// import "./components/CardProject";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  document.title = "QDK React Portfolio";
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<nav>
						<a className="App-link" href="https://github.com/qudoki" target="_blank" rel="noreferrer">
							Github
						</a>
						<a className="App-link" href="https://reactjs.org" target="_blank" rel="noreferrer">
							Resumé
						</a>
						<a className="App-link" href="https://reactjs.org">
							Projects
						</a>
            {/* <Route exact path="/about" component={About} className="App-link"/> */}
						{/* <a className="App-link" href="https://reactjs.org">
							About
						</a> */}
					</nav>
				</header>
			</div>
		</Router>
	);
}

export default App;
