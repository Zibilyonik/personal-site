import React from 'react';
import "../assets/scss/project-item.scss"

function ProjectItem(props) {
    return (
        <div className="project-item">
            <img className="project-img" src={props.image} alt={props.title} />
            <h2 className="project-title">{props.title}</h2>
            <p className="project-desc">{props.description}</p>
        </div>
    );
}

export default ProjectItem;