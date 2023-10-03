import logo from "../logo.svg";
import React, { Component } from "react";



function Hero() {
    return (
    <div className="hero-container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="styled-text-cont">
            <h1>Hi!</h1>
            <h1> I'm Martyna - a designer focused on UX/UI design, visual design and prototyping.</h1>
        </div>
    </div>
    )
}

export default Hero;