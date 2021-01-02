import React from "react";
import "./style.css"
// import Pic from "../../linkedinprofileimg.jpeg"
import Pic from "../../latestpic.jpg"

function CardAbout() {
	return (
			<div>
				<img
					class="responsive"
					id="photo"
					src={Pic}
					alt="me"
				/>
				<p class="text">
					Hello, my name is Quinn Dong-Kilkenny. I am an architectural designer transitioning from the Arch/Engineering/Construction industry into a full-stack web
					developer. I currently reside in New York, NY and I work at
					a design firm in Manhattan. I am actively building upon my visualization and design
					skillset to pursue a pivot into the world of software engineering. I am currently learning: Unity, Processing P5.js, Python, Javascript, and C++. Feel free to reach out via email for collaborations or inquiries. 
					Check out my <a href="https://www.linkedin.com/in/dong-qian/" target="_blank" rel="noreferrer">LinkedIn profile</a>.
				</p>
			</div>
	);
}

export default CardAbout;