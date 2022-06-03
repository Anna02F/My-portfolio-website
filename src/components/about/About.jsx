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
            .timeline({
                scrollTrigger: {
                    trigger: ".about",
                    start: "top center",
                },
            })
            .from(imgWrapper.current, {
                xPercent: -400,
                duration: 1.5,
                ease: "power3.out",
            })
            .from(
                img.current,
                { duration: 1, scale: 1.2, ease: "power3.out" },
                "-=.2"
            )
            .from(imgBg.current, {
                duration: 1.2,
                rotation: 365,
                ease: "power3.out",
            });
    });

    return (
        <section id="about" className="about">
            <div className="section__header">
                <h2>About Me</h2>
            </div>
            <div className="container about__container">
                <div className="about__image">
                    <div className="me-wrapper" ref={imgWrapper}>
                        <img
                            src={Me}
                            className="me"
                            alt="My image"
                            ref={img}
                        ></img>
                        <span className="me__background" ref={imgBg}></span>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="card about__card">
                            <a href="#portfolio"></a>
                            <MdOutlineDesignServices className="about__icon" />
                            <h3 className="card__heading">Skills</h3>
                        </article>
                        <article className="card about__card">
                            <a href="#skills"></a>
                            <BsBriefcase className="about__icon" />
                            <h3 className="card__heading">Projects</h3>
                        </article>
                        <article className="card about__card">
                            <BiMap className="about__icon" />
                            <h3 className="card__heading">
                                Location: Los Angeles, CA
                            </h3>
                        </article>
                    </div>
                    <p className="about__text">
                        Hello! I am a creative and result-driven Frontend/UI
                        Developer based in the United States. Frontend
                        Engineering is my passion.I love the fact that I can
                        create software and solutions that would have an impact
                        on everyone’s lives.I know HTML, CSS, JavaScript, React
                        and other UI technologies. Take a look at my skills and
                        portfolio. If you are excited let's talk and see what
                        contributions I can make to your team structure.
                    </p>
                    <CTALinks />
                </div>
            </div>
        </section>
    );
};

export default About;
