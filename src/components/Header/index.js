import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "../../circle.png";

function Header() {
	return (
		<main className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
		</main>
	);
}

export default Header;