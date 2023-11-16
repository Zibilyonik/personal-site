import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from './Project-Item';
import { projects } from './projects_db';
import "../assets/scss/Projects.scss";

function Projects() {
    return (
        <div className="projects-cont">
            <h2>Projects</h2>
            {projects.map(project => (
                <Link className="project-link" key={project.id} to={`/projects/project-${project.id}`} >
                    <ProjectItem
                        number={project.id}
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