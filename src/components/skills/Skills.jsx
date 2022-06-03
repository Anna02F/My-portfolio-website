import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Import icons
import { IoMdCheckmarkCircle } from "react-icons/io";

import "./skills.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="section__header">
                <h2>My Skills</h2>
            </div>
            <div className="container">
                <div className="skills__container">
                    <article className="card skills__card">
                        <h3 className="card__title">Frontend/UI skills</h3>
                        <div className="card__body">
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>HTML</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>JavaScript</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>CSS</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>React</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Bootstrap</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Node.js</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>SASS</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>SEO best practices</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Responsive Design</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Git, Github</span>
                            </div>
                        </div>
                    </article>
                    <article className="card skills__card">
                        <h3 className="card__title">Soft skills</h3>
                        <div className="card__body">
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Communication skills</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Patience</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Problem solving skills</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Open-mindedness</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Collaboration/teamwork</span>
                            </div>
                            <div className="card__content">
                                <IoMdCheckmarkCircle className="card__icon" />
                                <span>Time management</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Skills;
