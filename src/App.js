import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import About from "./pages/About";
import Project from "./pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
	document.title = "react-portfolio";
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL || ""}>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" className="App-link" component={App}>
						<Header />
					</Route>
					<Route exact path="/about" component={About} className="App-link">
						<About />
					</Route>
					<Route exact path="/project" component={Project} className="App-link">
						<Project />
					</Route>
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
