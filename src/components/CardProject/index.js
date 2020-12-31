import React, { useContext } from "react";
import ProjectContext from "../../utils/ProjectContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function CardProject() {
    const {title, description, demo, repo} = useContext (ProjectContext);
    return (
        <Carousel>
        <div>
            <img src="../../../public/screenshots/burgerlogger.png" />
            <p className="legend">{title}</p>
        </div>
        </Carousel>
    )
}

export default CardProject;

