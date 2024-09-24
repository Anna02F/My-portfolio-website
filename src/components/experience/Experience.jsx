import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INDEED_ACHIEVEMENTS, KAPUT_AM_ACHIEVEMENTS } from "../../constants";
//Import icons
import { IoMdCheckmarkCircle } from "react-icons/io";

import "./experience.css";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section__header">
        <h2>Professional experience</h2>
      </div>
      <div className="container">
        <div className="experience__container">
          <article className="card experience__card">
            <div>
              <h3 className="card__title">
                Indeed <span>Sept 2022 - May 2024</span>
              </h3>
              <h4 className="card__title">UX Developer</h4>
              <p>
                At Indeed, I was bridging design and engineering to build and
                maintain enterprise level customer facing frontend components
                for the Employer Home and Employer Notifications teams. Also, I
                supported the Communications Hub project in the Jobseeker org
                from inception to launch.
              </p>
              <br />
              <p>
                My main focus was to build, test, deploy, and maintain
                production level frontend features aligned with the Indeed
                Design System guidelines and WCAG 2.1 AA accessibility
                standards, driving design system adoption and accessibility
                compliance. Key achievements include:
              </p>
              <br />
              <ul>
                {INDEED_ACHIEVEMENTS.map((item, i) => (
                  <li key={i} className="card__content">
                    <IoMdCheckmarkCircle className="card__icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="card__title">
                Kaput.am <span>Jan 2021 - Feb 2022</span>
              </h3>
              <h4 className="card__title">Frontend Developer</h4>

              <p>
                At Kaput.am, I volunteered to develop a React app for their
                innovative 32-cardboard web app game, focusing on designing and
                building UI components using React, HTML and CSS. This
                experience allowed me to apply and level up my skills in
                frontend development, as well as user experience design and team
                collaboration. Here are some key highlights:
              </p>
              <br />
              <ul>
                {KAPUT_AM_ACHIEVEMENTS.map((item, i) => (
                  <li key={i} className="card__content">
                    <IoMdCheckmarkCircle className="card__icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
