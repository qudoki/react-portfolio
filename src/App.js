import logo from "./circle.png";
import background from "./background-gradient.png";
import "./App.css";
import "./data/about";
import "./data/projects";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<nav>
						<a className="App-link" href="https://reactjs.org" target="_blank">
							Github
						</a>
						<a className="App-link" href="https://reactjs.org" target="_blank">
							Resumé
						</a>
						<a className="App-link" href="https://reactjs.org">
							Projects
						</a>
            {/* <Route exact path="/about" component={About} /> */}
						<a className="App-link" href="https://reactjs.org">
							About
						</a>
					</nav>
				</header>
			</div>
		</Router>
	);
}

export default App;
