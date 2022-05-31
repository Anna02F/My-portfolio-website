import React from "react";
import CTALinks from "../header/CTALinks";

import "./about.css";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="section__header">
                <h2>About Me</h2>
            </div>
            <div className="container about__container">
                <p className="about__text">
                    Hello! I am a creative, organized and result-driven
                    Frontend/UI Developer with extensive experience in
                    accounting systems. Frontend Engineering is my passion. So I
                    switched my profession to follow my passion in IT
                    technologies.My mission is to use innovative technologies to
                    improve peoples' lives and improve the world. I love the
                    fact that I can create software and solutions that would
                    have an impact on everyone’s lives...
                </p>
                <CTALinks />
            </div>
        </section>
    );
};

export default About;
