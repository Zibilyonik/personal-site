import React from "react";
import TitleCard from "../TitleCard";
import "../../assets/scss/Project1.scss";
function Project1() {
  return (
    <div id="project-page">
      <TitleCard name="SimplyBetter" subtitle="Therapist Scheduling App and Responsive Webapp" path="https://via.placeholder.com/450" />
      <div id="project-main">
        <div className="project-info">
          <h2>Designed to help</h2>
          <p>BetterHelp is an app designed to help people find a schedule perfect therapist for themselves. In a Polish market there’s no app exclusively dedicated to this purpose. BetterHelp’s primary target are neurodivergent people, but it can easily benefit all users who&rsquo;d like to find a therapist based on their preferences.</p>
        </div>
        <div className="project-info">
          <h2>Overview</h2>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>The user is presented an overview of popular traits other patients are looking for on their therapists and is able to select their desired ones.</p>
          <p>The app offers the option to add your own ideas of traits.</p>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>I&rsquo;ve implemented the swiping system, similar to dating apps, to add an engaging and fun way of finding the best matching specialist without having to scroll through the catalogue.</p>
        </div>
        <div className="project-info">
          <h2>Understanding</h2>
          <section>
            <h3>Assumptions</h3>
            <p><span>Users:</span> People seeking therapists and psychologists.</p>
            <p><span>User Goals:</span> Easy, quick way to find a fitting therapist and scheduling a visit.</p>
            <p><span>Potential Features:</span>Tinder-like swiping system for finding a therapist, traits system, custom reminders.</p>
          </section>
          <section>
            <h3>Meet the Users</h3>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
            <p>Marcel is a 31-years-old graphic designer who needs an easy way to schedule the therapist appointment, because of his social anxiety.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
            <p>Anna is an 18-years-old student, who needs often reminders about her appointments, because of her ADHD.</p>
          </section>
        </div>
        <div className="project-info">
          <h2>Initial Design Process</h2>
          <h3>Wireframes and Sitemap</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
        </div>
        <div className="project-info">
          <h2>Usability Study</h2>
          <section>
            <p><span>Study type:</span> Unmoderated usability study</p>
            <p><span>Location:</span> Wroclaw, remote</p>
            <p><span>Participants:</span> 5 participants, 3 male, 1 female, 1 non-binary</p>
            <p><span>Length:</span> 25-45 minutes per session</p>
          </section>
          <section>
            <h3>Usability Study Findings</h3>
            <p><span>Upcoming Appointment Labeling:</span> The upcoming appointments window label is hard to understand for most users</p>
            <p><span>Compatibility:</span> Compatibility is the most important feature to most users</p>
            <p><span>Recurring Appontment:</span> The recurring visit option is important to some users</p>
          </section>
        </div>
        <div className="project-info">
          <h2>Refining the Design</h2>
          <p>Based on the insights from the usability study, I applied design changes like providing a visible compatibility with the therapist when landing on the specialist&rsquo;s profile.</p>
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>I&rsquo;ve added the option to schedule recurring visit, while the user is trying to book the visit with the specialist.</p>
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>Additional design changes included adding an option to schedule a recurring visit and relabeling the &rdquo;upcoming appointment&rdquo; button into &rdquo;nearest appointment&rdquo;.</p>
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
        </div>
        <div className="project-info">
          <h2>High Fidelity Prototype</h2>
          <p>The high-fidelity prototype followed the same user flow as the low-fidelity prototype, including design changes made after the usability study.</p>
          <a><p>View BetterHelp&rsquo;s high fidelity prototype</p></a>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
        </div>
        <div className="project-info">
          <h2>Takeaways</h2>
          <p><span>Impact:</span> Users shared that the app made scheduling a new therapist seem like something they could actually do without unnecessary stress.</p>
          <p><span>What I&rsquo;ve learned:</span> I learned that even though the problem I was trying to solve was significant, diligently going through each step of the design process and aligning with specific user needs helped me come up with solutions that were both feasible and useful.</p>
          <h3>Next Steps</h3>
          <p><span>1:</span> Conduct research on how successful the app is in reaching the goal to help users schedule the right therapists.</p>
          <p><span>2:</span> Add more educational resources for users to learn about types of therapy and how to choose one.</p>
        </div>
      </div>
    </div>
  );
}

export default Project1;
