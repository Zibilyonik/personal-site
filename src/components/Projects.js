import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import { projects } from './projects_db';

function Projects() {
    return (
        <div>
            {projects.map(project => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                    <ProjectItem
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