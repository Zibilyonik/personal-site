import React from "react";
import TitleCard from "../TitleCard";
function Project3() {
  return (
    <div id="project-page">
      <TitleCard name="GameMaster" subtitle="Arcade High-Score Tracking App" path="https://via.placeholder.com/450" />
      <div id="project-main">
        <div className="project-info">
          <h2>Designed for fun</h2>
          <p>GameMaster is an app that allows users to keep track of their score in arcade games with additional function of finding and inviting other players for a match. GameMaster targets various users, from competitive players to children (multiple profiles on one account for parental control).</p>
        </div>
        <div className="project-info">
          <h2>Overview</h2>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>Easy and straightforward connection to the arcade machine</p>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <p>Fast access to the game history and scores</p>
        </div>
        <div className="project-info">
          <h2>Understanding</h2>
          <section>
            <h3>Assumptions</h3>
            <p><span>Users:</span> Casual and competitive arcade gamers.</p>
            <p><span>User Goals:</span> Get better at games, find a quick way to track scores, easy access to other users and inviting them to play together.</p>
            <p><span>Potential Features:</span> QR pairing, forum, friends list, parental control</p>
          </section>
          <section>
            <h3>User Research Painpoints</h3>
            <p><span>Time:</span> Studying young adults are to busy to keep track of their score on their own</p>
            <p><span>Child Friendly Features:</span> Score tracking apps don’t focus on implementing child friendly features</p>
            <p><span>Accessibility:</span> Platforms for score tracking are not equipped with assistive technologies</p>
            <p><span>Design:</span> Most of the Arcade related apps have dated, not user friendly design</p>
          </section>
          <section>
            <h3>Meet the Users</h3>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
            <p>Felix is a 21-year-old student who needs an app that allows him to share and compare high scores because he spends a lot of time playing with his friends and preparing for a tournament.</p>
            <h3>User Journey Map</h3>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          </section>
        </div>
        <div className="project-info">
          <h2>Initial Design Process</h2>
          <section>
            <h3>Paper Wireframes</h3>
            <p>Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritized a quickly and easily accessible scan button to help users save time.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          </section>
          <section>
            <h3>Digital Wireframes</h3>
            <p>As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research.</p>
            <p>Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow I connected was connecting the device to an arcade machine and finding the opponent, so the prototype could be used in a usability study.</p>
            <img className="img-rec" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          </section>
        </div>
        <div className="project-info">
          <h2>Usability Study</h2>
          <section>
            <p><span>Study type:</span> Unmoderated usability study</p>
            <p><span>Location:</span> Wroclaw, remote</p>
            <p><span>Participants:</span> 5 participants, 3 male, 2 female, ages 6-45</p>
            <p><span>Length:</span> 15-25 minutes per session</p>
          </section>
          <section>
            <h3>Usability Study Findings</h3>
            <p><span>Scanner:</span> The QR scanner button should be more visible</p>
            <p><span>Labeling:</span> Connecting to other users is confusing</p>
            <p><span>Manual Score Input:</span> The process of manually inputting score should be simplified</p>
          </section>
        </div>
        <div className="project-info">
          <h2>Refining the Design</h2>
          <p>Early designs allowed for connecting to the other users, but after the usability studies, I switched the “invite” button to “send message” to give users an option to talk to the potential opponent fist. I&rsquo;ve also revised the design so users see QR code scanner better when they first land on the home screen.</p>
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>Before</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <h3>After</h3>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
        </div>
        <div className="project-info">
          <h2>High Fidelity Prototype</h2>
          <p>The final high-fidelity prototype presented cleaner user flows for pairing the device and connecting to other users.</p>
          <a><p>View GameMaster’s high fidelity prototype</p></a>
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
          <img className="img-sq" src="https://via.placeholder.com/450" alt="BetterHelp logo" />
        </div>
        <div className="project-info">
          <h2>Takeaways</h2>
          <p><span>Impact:</span> The app makes users feel like they finally got what they wished for, making the overall experience of playing the arcade games way more pleasant.</p>
          <p><span>What I&rsquo;ve learned:</span> While designing the GameMaster app, I learned that the first ideas for the app are only the beginning of the process. Usability studies and peer feedback influenced each iteration of the app’s designs.</p>
          <h3>Next Steps</h3>
          <p><span>1:</span> Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.</p>
          <p><span>2:</span> Conduct more user research to determine any new areas of need.</p>
        </div>
      </div>
    </div>
  );
}

export default Project3;
