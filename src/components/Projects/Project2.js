import React from "react";
import TitleCard from "../TitleCard";
import "../../assets/scss/Project1.scss";
function Project2() {
  return (
    <div id="project-page">
      <TitleCard name="ClickedIn" subtitle="Networking Webapp Dedicated to Photographers" path="https://via.placeholder.com/450" />
      <div id="project-main">
        <div className="project-info">
          <h2>Designed to connect</h2>
          <p>Clicked-in is a photography networking website, that allows users to create, update and promote their work. The product offers job hunting and posting offers, along with looking for coworkers.</p>
        </div>
        <div className="project-info">
          <h2>Overview</h2>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>Fast and intuitive access to jobs and &rdquo;for hire&rdquo; pages</p>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>Easy, step-by-step process of posting a job.</p>
        </div>
        <div className="project-info">
          <h2>Understanding</h2>
          <section>
            <h3>Assumptions</h3>
            <p><span>Users:</span> Professional and amateur photographers.</p>
            <p><span>User Goals:</span> Expanding network, finding and posting commissions and collaboration requests.</p>
            <p><span>Potential Features:</span>Suggested posts and profiles, different plans for different purposes, easy step-by-step job posts.</p>
          </section>
          <section>
            <h3>Meet the Users</h3>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
            <p>Borys is a 47-years old freelance photographer, who needs to find someone to work with, because he’s not tech savvy and wants to focus on the things he knows and is good at.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
            <p>Ola is a 26-years-old fresh photography major, who needs a way to promote her business, because she wants to get more clients and commissions.</p>
          </section>
        </div>
        <div className="project-info">
          <h2>Initial Design Process</h2>
          <section>
            <h3>Sitemap</h3>
            <p>Difficulty with website navigation was a primary pain point for users, so I used that knowledge to create a sitemap.</p>
            <p>My goal here was to make strategic information architecture decisions that would improve overall website navigation. The structure I chose was designed to make things simple and easy.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          </section>
          <section>
            <h3>Paper Wireframes</h3>
            <p>Next, I sketched out paper wireframes for each screen in my app, keeping the user pain points about navigation, browsing, and checkout flow in mind.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          </section>
          <section>
            <h3>Digital Wireframes</h3>
            <p>As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
            <p>Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow I connected was creating the account and posting a job offer, so the prototype could be used in a usability study.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          </section>
        </div>
        <div className="project-info">
          <h2>Usability Study</h2>
          <section>
            <p><span>Study type:</span> Unmoderated usability study</p>
            <p><span>Location:</span> Wroclaw, remote</p>
            <p><span>Participants:</span> 5 participants, 3 male, 2 female, ages 18-53</p>
            <p><span>Length:</span> 20-30 minutes per session</p>
          </section>
          <section>
            <h3>Usability Study Findings</h3>
            <p><span>Salary Range:</span> Users would like to have a salary range included in the job offer</p>
            <p><span>Short Description:</span> Users would like to have short descriptions in their profiles</p>
            <p><span>Skills:</span> Users would prefer skills to be listed with ratings</p>
            <p><span>Gender:</span> Users don&rsquo;t want a gender option in profile creation</p>
          </section>
        </div>
        <div className="project-info">
          <h2>Refining the Design</h2>
          <p>Early designs allowed for some customization, but after the usability studies, I added additional options to go back to sign in window. I also revised the design so users don’t have to choose their gender when they first create their profile.</p>
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>The skill listing has been changed into tags system that allows rating of each of them.</p>
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>Additional design changes included an option of adding a salary range to a job post.</p>
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
        </div>
        <div className="project-info">
          <h2>High Fidelity Prototype</h2>
          <p>The high-fidelity prototype followed the same user flow as the low-fidelity prototype, including design changes made after the usability study.</p>
          <a><p>View ClickedIn’s high fidelity prototype</p></a>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
        </div>
        <div className="project-info">
          <h2>Takeaways</h2>
          <p><span>Impact:</span> The app makes users feel like Clicked-in really thinks about how to meet their needs.</p>
          <p><span>What I&rsquo;ve learned:</span> While designing the Clicked-in website, I learned that the first ideas for the app are only the beginning of the process. Usability studies and peer feedback influenced each iteration of the app’s designs.</p>
          <h3>Next Steps</h3>
          <p><span>1:</span> Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.</p>
          <p><span>2:</span>  Conduct more user research to determine any new areas of need.</p>
        </div>
      </div>
    </div>
  );
}

export default Project2;
