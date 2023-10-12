import React from 'react';

function ProjectItem(props) {
    return (
        <div>
            <a href={props.url}>
                <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>
            </a>
            <p>{props.description}</p>
        </div>
    );
}

export default ProjectItem;