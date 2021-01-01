import React, { useContext } from "react";
import ProjectContext from "../../utils/ProjectContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

function CardProject() {
	const { allProjects } = useContext(ProjectContext);
	return (
		<Carousel>
			{allProjects.map((project) => (
				<div>
					<p className="project-title">{project.title}</p>
					<img
						className="project-image"
						src={project.src}
						alt="project-splash"
					/>
					<p className="project-description">{project.description}</p>
					<div>
						<span>
							<button>
								<a target="_blank" rel="noreferrer" href={project.demo}>
									Demo
								</a>
							</button>
						</span>
						<span>
							<button>
								<a target="_blank" rel="noreferrer" href={project.repo}>
									Repo
								</a>
							</button>
						</span>
					</div>
				</div>
			))}
		</Carousel>
	);
}

export default CardProject;
