import React from 'react';
import { projects } from './projects_db';

function About() {
    return (
        <div>
            <p>Hi, my name is Martyna and I&rsquo;m a UX/UI designer.</p>
            <p>I have [Number of Years] years of experience in UX/UI Design and have recently worked on projects such as {projects[0].title}, {projects[1].title}, and {projects[2].title}.</p>
            <p>In my free time, I enjoy [Hobby 1], [Hobby 2], and [Hobby 3].</p>
        </div>
    );
}

export default About;
