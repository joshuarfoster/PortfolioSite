import React from "react";
import "./ProjectCard.css"

function ProjectCard(props){
    return(
        <div className="ProjectCard">
            <img src={props.image}/>
            <div className="cardContent">
                <h3>{props.title}</h3>
                <a href={props.githubURL}>GitHub</a>
                <div>
                {(props.launchURL && <a href={props.launchURL}>Deploy</a>) || <p>Not currently deployed</p>}
                </div>
                <p>{props.description}</p>
                <hr></hr>
                <p>{props.tech}</p>
            </div>
        </div>
    )
}
export default ProjectCard;