import React from 'react';
import '../assets/scss/About.scss';

function About() {
    return (
        <div id="About">
            <div id="resume-btn">
                <a href="./Resume Martyna Szczepaniak.pdf" target='_blank'>Resume</a>
            </div>
            <div className="styled-text-cont">
                <h1><span>I&rsquo;m</span> a Wrocław, Poland-based designer, passionate about new challenges and finding solutions to problems during the design process. </h1>
                <h1><span>My goal</span> is constant growth and learning through the feedback I receive during projects. I&rsquo;m always looking for a way to improve myself, and I believe continuous progress and curiosity are the keys to success. </h1>
                <h1><span>My life</span> has been revolving around creative work, from traditional techniques of artistic expression from a very young age to finishing the Art Academy with a Master&rsquo;s Degree in Media Art, I have always been looking for a way to design and create.</h1>
                <h1><span>Finishing</span> Google&rsquo;s UX Design Professional Certificate helped me discover a new branch of design and realise what I&rsquo;m really passionate about, as UX/UI design perfectly combines problem-solving with creative work.</h1>
            </div>
        </div>
    );
}

export default About;
