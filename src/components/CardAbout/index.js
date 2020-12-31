import React from "react";

function CardAbout(props) {
	return (
		<div class="row full info hide">
			<div>
				<img
					class="responsive"
					id="photo"
					src="./assets/linkedinprofileimg.jpeg"
					alt="me"
				/>
			</div>
			<div>
				<p>
					Hello! I am an Architect transitioning into a full-stack web
					developer. I currently reside in Ridgewood, Queens, NY and I work at
					an architectural design firm. I am looking forward to building upon my
					skillset to pursue a pivot into the developer world.
				</p>
			</div>
		</div>
	);
}

export default CardAbout;