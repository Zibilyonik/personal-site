import logo from "../logo.svg";
import React from "react";
import "../assets/css/Hero.css";


function Hero() {
    return (
    <div className="hero-container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="styled-text-cont">
            <h1 className="title"><span className="coloured">Hi!</span> {"I'm Martyna - a designer focused on UX/UI design, visual design and prototyping."}</h1>
        </div>
    </div>
    )
}

export default Hero;