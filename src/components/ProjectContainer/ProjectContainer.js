import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";

const ProjectContainer = () => {
const projects = [
    {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"facebook",
        desc:"So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:",
        link:"www.google.com",
        
    },
    {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"facebook",
        desc:"So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:",
        link:"www.google.com",
        
    },
    {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"facebook",
        desc:"So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:",
        link:"www.google.com",
        
    },
    {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"facebook",
        desc:"So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:",
        link:"www.google.com",
        
    },
    {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"facebook",
        desc:"So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:",
        link:"www.google.com",
        
    },
    {
        img:"https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
        title:"facebook",
        desc:"So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:",
        link:"www.google.com",
        
    },
];

  return (
     <Element className="projectcontainer" id="projects">
        <h1>Projects</h1>
        <p>Here are some projects which i done for making lives of people easy.</p>
        <div className='projectcontainer__projects'>
        {projects.map((project,index) => {
        return (
            <Project
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
            />
        );
       })}
        </div>
     </Element>
  );
};

export default ProjectContainer;
