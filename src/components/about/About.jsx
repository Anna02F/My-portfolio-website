import React, { useRef, useEffect } from "react";
import CTALinks from "../header/CTALinks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Import icons
import { MdOutlineDesignServices } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
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
              <BsBriefcase className="about__icon" />
              <h3 className="card__heading">Projects</h3>
            </article>
            <article className="card about__card">
              <BiMap className="about__icon" />
              <h3 className="card__heading">Location: Los Angeles, CA</h3>
            </article>
          </div>
          <p className="about__text">
            Hey! I am a versatile UX/Frontend Engineer, and my specialty is
            helping companies and teams bring their design visions to life by
            developing user-friendly and high-quality digital experiences. I do
            this by leveraging my expertise in React, JavaScript, HTML, and CSS,
            and other UI technologies. My commitment to best practices in
            front-end development ensures that I deliver clean, efficient, and
            maintainable code.
            <br />
            <br />
            What’s unique about me is my holistic approach to front-end
            development, ensuring that every digital product is not only
            visually appealing, fast, and intuitive, but also accessible. My
            belief that EVERYONE deserves a seamless and enjoyable digital
            experience guides my commitment to accessibility and user-centric
            solutions.
          </p>
          <CTALinks />
        </div>
      </div>
    </section>
  );
};

export default About;
