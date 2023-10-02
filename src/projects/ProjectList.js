import React from "react";
import ProjectCard from "./ProjectCard";
import YouTeachLogo from "../Images/YouTeachLogo.png";
import SmartWorksheetsLogo from "../Images/SmartWorksheetsLogo.png"
import "./ProjectList.css"

function ProjectList(){

    const data = [
        {id: 1, title: "Smart Worksheets", image: SmartWorksheetsLogo, githubURL: "", launchURL: "http://joshuarfoster3.pythonanywhere.com/register", description: "Developed a website that allows teachers to create custom worksheets with randomized variables and access premade answer keys.", tech: "Flask, PostgreSQL, Python, JavaScript"},
        {id: 2, title: "YouTeach", image: YouTeachLogo, githubURL: "https://github.com/joshuarfoster/Capstone_2", launchURL: null, description: "Created a website that enables online content creators to organize videos into courses with units and accompanying media types.", tech:"YouTube Data API, NodeJS, React, PostgreSQL"}
    ]

    return(
        <div className="projectList">
            <h1>Project List</h1>
            <div className="projects">
            {data.map((item) => (
                <ProjectCard key={item.id} id={item.id} title={item.title} image= {item.image} githubURL={item.githubURL} launchURL={item.launchURL} description={item.description} tech={item.tech} />
            ))}
            </div>
        </div>
    )
}

export default ProjectList;