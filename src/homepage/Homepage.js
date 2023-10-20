import React from "react";
import { useEffect, useState } from "react";
import "./Homepage.css"
import ComputerDeskImage from "../Images/ComputerDesk.png";
import hour24 from "../Images/24hour.png";
import Working from "../Images/Working.png";
import Collaboration from "../Images/Collaboration.png";
import EmptyBubble from "../Images/EmptyBubble.png";
import FilledBubble from "../Images/FilledBubble.png";
import RightArrow from "../Images/RightArrow.png";
import LeftArrow from "../Images/LeftArrow.png"





function Homepage(){
    const sources = [ComputerDeskImage,hour24,Working,Collaboration];
    const content = [" I'm an enthusiastic Entry Level Software Engineer with a background in journalism, bringing fundamental knowledge of software design, development, and testing. Combining my journalism mindset with software engineering skills, I excel in collaborative workflows and effective communication, understanding the iterative and feedback-driven nature of both fields. I embrace feedback, iterate based on teammate input, and prioritize adherence to coding standards and guidelines to deliver clean, maintainable code.", "With a journalism background, I possess a keen attention to detail and a commitment to quality assurance, honed through editorial reviews of articles. This meticulousness extends to my approach in software development, ensuring the alignment of code with project requirements and industry best practices. My ability to manage multiple tasks and meet deadlines, developed through journalism's fast-paced environment, translates seamlessly into the dynamic nature of software development.", "By leveraging my combined expertise in journalism and software engineering, I bring a unique perspective to the development process. I am eager to contribute my passion for quality, effective communication, and attention to detail to a dynamic software development team, driving collaborative efforts and delivering high-quality results.", "I am seeking a job opportunity with a company that values collaboration and teamwork. I believe that a collaborative environment is essential for the success of any organization, as it allows for the sharing of ideas and knowledge, and helps to foster a sense of community within the workplace. I am confident that my skills and experience would be an asset to such a team, and I am excited to contribute my talents to a company that places a high value on collaboration."]
    const [slide, setSlide] = useState(1);




    return(
        <div>
            <div className="content">
                <img className="arrow" src={LeftArrow} onClick={() => setSlide((slide + 2) % 4 + 1)}/>
                {slide === 1 && <img src={sources[0]} />}
                {slide === 2 && <img src={sources[1]} />}
                {slide === 3 && <img src={sources[2]} />}
                {slide === 4 && <img src={sources[3]} />}
                {slide === 1 && <p>{content[0]}</p>}
                {slide === 2 && <p>{content[1]}</p>}
                {slide === 3 && <p>{content[2]}</p>}
                {slide === 4 && <p>{content[3]}</p>}
                <img className="arrow" src={RightArrow}  onClick={() => setSlide(slide % 4+1)}/>
            </div>
            <form className="radio">
                <img src = {slide === 1 ? FilledBubble: EmptyBubble} onClick = {() => setSlide(1)}/>
                <img src = {slide === 2 ? FilledBubble: EmptyBubble} onClick = {() => setSlide(2)}/>
                <img src = {slide === 3 ? FilledBubble: EmptyBubble} onClick = {() => setSlide(3)}/>
                <img src = {slide === 4 ? FilledBubble: EmptyBubble} onClick = {() => setSlide(4)}/>
            </form>
        </div>
    )
}

export default Homepage;