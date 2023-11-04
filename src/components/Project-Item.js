import React from 'react';
import PropTypes from 'prop-types';
import "../assets/scss/Project-Item.scss"

function ProjectItem(props) {
    return (
        <div className="project-item">
            {props.number < 10 ? (
                <h3 className="project-number">0{props.number}.</h3>
            ) : (
                <h3 className="project-number">{props.number}.</h3>
            )}
            <img className="project-img" src={props.image} alt={props.title} />
            <h2 className="project-title">{props.title}</h2>
            <p className="project-desc">{props.description}</p>
        </div>
    );
}

ProjectItem.propTypes = {
    number: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ProjectItem;