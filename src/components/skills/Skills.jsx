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
        <h2>Skills</h2>
      </div>
      <div className="container">
        <div className="skills__container">
          <article className="card skills__card">
            <h3 className="card__title">Technical skills</h3>
            <div className="card__body">
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>HTML</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>CSS</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>JavaScript</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>TypeScript</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>React</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>Node.js</span>
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
                <span>Git, Github, Jira</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>Agile Methodologies</span>
              </div>
            </div>
          </article>
          <article className="card skills__card">
            <h3 className="card__title">Soft skills</h3>
            <div className="card__body">
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>Effective Communication</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>Problem solving</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>Attention to Detail</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>User-Centric thinking</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>Collaboration/teamwork</span>
              </div>
              <div className="card__content">
                <IoMdCheckmarkCircle className="card__icon" />
                <span>Learning Agility</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
