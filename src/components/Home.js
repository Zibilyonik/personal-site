import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";

function Home() {
    return (
        <div id="home-cont" className="main-cont">
            <Hero />
            <Projects />
        </div>
    );
}

export default Home;
