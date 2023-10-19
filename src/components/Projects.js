import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from './Project-Item';
import { projects } from './projects_db';
import "../assets/scss/projects.scss"

function Projects() {
    return (
        <div className="projects-cont">
            {projects.map(project => (
                <Link className="project-link" key={project.id} to={`/projects/${project.id}`}>
                    <ProjectItem
                        number={project.id + 1}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                </Link>
            ))}
        </div>
    );
}

export default Projects;