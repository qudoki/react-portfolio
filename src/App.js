import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import logo from "./circle.png";
import "./App.css";
import About from "./pages/About";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
	document.title = "QDK React Portfolio";
	return (
		<Router>
			<div className="App">
				<Nav>
					<Switch>
						<Route exact path="/" component={App} className="App-link" />
						<Route exact path="/about" component={About} className="App-link">
							<About />
						</Route>
						<Route
							exact
							path="/project"
							component={Project}
							className="App-link"
						>
							<Project />
						</Route>
					</Switch>
				</Nav>

				<main className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</main>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
