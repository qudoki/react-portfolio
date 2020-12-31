import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Resume from "../../cv.pdf";
import Project from "../../pages/Project";
import About from "../../pages/About";
import App from "../../App.js";

function Nav() {
	return (
		<nav>
			<Link className="App-link" to="/" href={App}>
				Home
			</Link>
			<a
				className="App-link"
				href="https://github.com/qudoki"
				target="_blank"
				rel="noreferrer"
			>
				Github
			</a>
			<a className="App-link" href={Resume} target="_blank" rel="noreferrer">
				Resumé
			</a>
			<Link className="App-link" to="/project" href={Project}>
				Projects
			</Link>
			<Link className="App-link" to="/about" href={About}>
				About
			</Link>
		</nav>
	);
}

export default Nav;
