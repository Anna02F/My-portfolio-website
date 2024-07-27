import React, { useRef, useEffect } from "react";
import CTALinks from "../header/CTALinks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Import icons
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdOutlineWorkHistory } from "react-icons/md";
//Import assets
import Me from "../../assets/me.png";

import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // const aboutSection = useRef;
  const imgWrapper = useRef();
  const img = useRef();
  const imgBg = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline(
        {
          scrollTrigger: {
            trigger: ".about",
            start: "top center",
          },
        },
        "-=.5"
      )
      .from(
        imgWrapper.current,
        {
          xPercent: -500,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=.5"
      )
      .from(img.current, { scale: 1.2, ease: "power3.out" }, "-=.3")
      .from(
        imgBg.current,
        {
          duration: 0.5,
          rotation: 365,
          ease: "power3.out",
        },
        "-=.3"
      );
  });

  return (
    <section id="about" className="about">
      <div className="section__header">
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__image">
          <div className="me-wrapper" ref={imgWrapper}>
            <img src={Me} className="me" alt="Me" ref={img}></img>
            <span className="me__background" ref={imgBg}></span>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="card about__card">
              <a href="#skills"></a>
              <MdOutlineDesignServices className="about__icon" />
              <h3 className="card__heading">Skills</h3>
            </article>
            <article className="card about__card">
              <a href="#portfolio"></a>
              <HiOutlineBriefcase className="about__icon" />
              <h3 className="card__heading">Projects</h3>
            </article>
            <article className="card about__card">
              <a href="#experience"></a>
              <MdOutlineWorkHistory className="about__icon" />
              <h3 className="card__heading">Experience</h3>
            </article>
          </div>
          <p className="about__text">
            Hey there! I'm Anna, a Frontend Engineer based in Los Angeles, CA.
            I'm a quietly curious individual with a constant drive to learn and
            grow as a professional. I love crafting user experiences that
            genuinely resonate with people. I specialize in turning creative
            design visions into life by building user-centric and responsive
            frontend applications. My toolkit includes React,
            JavaScript/TypeScript, HTML, CSS, and other frontend technologies
            that help me transform these ideas into functional digital
            experiences.
            <br />
            <br />
            Along with making websites visually appealing, I prioritize
            performance, usability, and accessibility. I believe everyone
            deserves an enjoyable digital experience, and I'm committed to
            achieving that through thoughtful coding. If you are interested,
            let's connect and have a chat!
          </p>
          <CTALinks />
        </div>
      </div>
    </section>
  );
};

export default About;
