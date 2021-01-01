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
				<span>
{/* <form>
	<label for="inputName">Name</label>
	<input type="text" class="form-control"></input>
</form> */}

					{/* <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Full Name" />
                            </div>
                        </div>
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="hello@qdk.com" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                                placeholder="Let's collab!"></textarea>
                        </div>
                        <button type="submit" class="submit btn btn-dark">Submit</button>
                    </form> */}



				</span>
				<p class="text">
					Hello, my name is Quinn Dong-Kilkenny. I am an architectural designer transitioning from the Arch/Engineering/Construction industry into a full-stack web
					developer. I currently reside in New York, NY and I work at
					a design firm in Manhattan. I am actively building upon my visualization and design
					skillset to pursue a pivot into the world of software engineering. I am currently learning: Unity, Processing P5.js, Python, Javascript, and C++. Feel free to reach out via email for collaborations or inquiries.
				</p>
			</div>
	);
}

export default CardAbout;