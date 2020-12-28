import React, { useState } from "react";
import API from "../../utils/API";

function About() {
	console.log("here!");

	return (
		// <CardAbout />
		<div class="row full info hide">
			<div class="col-4">
				<img
					class="responsive"
					id="photo"
					src="./assets/linkedinprofileimg.jpeg"
					alt="me"
				/>
			</div>
			<div class="col-8">
				<p class="text responsive">
					Hello! I am an Architect transitioning into a full-stack web
					developer. I currently reside in Ridgewood, Queens, NY and I 
					work at an architectural design firm. I am looking forward to building
					upon my skillset to pursue a pivot into the developer world.
				</p>
			</div>
		</div>
	);
}

export default About;
