import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../../constants";

import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const projectsRef = useRef();
  const project = gsap.utils.selector(projectsRef);
  const tl = useRef();

  //Wait until DOM has been rendered
  useLayoutEffect(() => {
    tl.current = gsap
      .timeline(
        {
          scrollTrigger: {
            trigger: ".portfolio",
            start: "top 50%",
          },
          ease: "power3.out",
        },
        "-=.5"
      )
      .from(
        project(".portfolio__card"),
        {
          scale: 0.1,
          opacity: 0,
          stagger: 0.4,
        },
        "-=1"
      );
  });

  const onMouseEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1.1,
      duration: 0.2,
      ease: "expo.inOut",
    });
  };

  const onMouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "expo.inOut",
    });
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="section__header">
        <h2>My Portfolio</h2>
      </div>
      <div className="container portfolio__container">
        <div className="javaScript-projects">
          <h3>Projects with HTML, CSS and JavaScript</h3>
          <div className="projects-wrapper" ref={projectsRef}>
            {PROJECTS.map(({ id, image, title, github, demo }) => {
              return (
                <article
                  key={id}
                  className="card portfolio__card"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <div className="portfolio__card-inner">
                    <div className="card__body">
                      <div className="card__image">
                        <a href={demo} target="_blank">
                          <img src={image} alt="project1"></img>
                        </a>
                      </div>
                      <h4 className="card__heading">{title}</h4>
                      <div className="card__links">
                        <a
                          className="btn btn--outline"
                          href={github}
                          target="_blank"
                        >
                          Github
                        </a>
                        <a
                          className="btn btn--primary"
                          href={demo}
                          target="_blank"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
