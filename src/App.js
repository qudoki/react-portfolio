import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./circle.png";
import "./App.css";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./components/Footer";
// import "./components/CardAbout";
// import "./components/CardProject";

function App() {
	document.title = "QDK React Portfolio";
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<nav>
						<a
							className="App-link"
							href="https://github.com/qudoki"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							className="App-link"
							href="../../../public/cv.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Resumé
						</a>
						<a className="App-link" href="https://reactjs.org">
							Projects
						</a>
						<Route exact path="/about" component={About} className="App-link" />
						<a className="App-link" href="https://reactjs.org">
							About
						</a>
					</nav>
				</header>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
