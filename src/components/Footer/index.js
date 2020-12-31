import React from "react";
import "./style.css";
// import background from "../../background-gradient.png";
import footer from "../../footer.png"

function Footer() {
	return (
		<footer>
			<img
				src={footer}
				className="footer-background"
				alt="footer-background"
			/>
			<p>Copyright © Quinn Dong-Kilkenny</p>
		</footer>
	);
}

export default Footer;
