import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

import CTALinks from "./CTALinks";
import HeaderSocials from "./HeaderSocials";
//import icons
import { BsArrowDownCircle } from "react-icons/bs";
//import assets
import LOGO from "../../assets/logo.svg";

import "./header.css";

const Header = () => {
  const firstHeading = useRef();
  const secondHeading = useRef();
  const thirdHeading = useRef();
  const headerButtons = useRef();
  const headerScroll = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline(
        {
          opacity: 0,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.3,
        },
        "-=.2"
      )
      .from(firstHeading.current, {
        y: 50,
      })
      .from(
        secondHeading.current,
        {
          y: 100,
        },
        "-=.2"
      )
      .from(
        thirdHeading.current,
        {
          y: 50,
        },
        "-=.2"
      )
      .from(
        headerButtons.current,
        {
          y: 50,
          opacity: 0,
          delay: 0.4,
        },
        "-=.2"
      )
      .from(
        headerScroll.current,
        {
          y: 50,
          opacity: 0,
          delay: 0.4,
        },
        "-=.2"
      );
  });
  return (
    <header className="header">
      <div className="top-nav">
        <a className="logo" href="#">
          <img src={LOGO} alt="Logo: double uppercase A"></img>
        </a>
        <HeaderSocials />
      </div>
      <div className="container header__container">
        <h4 className="heading-line-first">
          <span className="heading-line-first__inner" ref={firstHeading}>
            Hey! I'm
          </span>
        </h4>
        <h1 className="heading-line-second">
          <span className="heading-line-second__inner" ref={secondHeading}>
            Anna Aghajanyan
          </span>
        </h1>
        <div className="heading-line-third">
          <div ref={thirdHeading}>
            <h4 ref={thirdHeading}>
              Frontend Engineer who brings design visions to life by building
              user-centric and responsive frontend applications
            </h4>
          </div>
        </div>

        <div className="header__buttons" ref={headerButtons}>
          <CTALinks />
        </div>
        <div className="header__scroll" ref={headerScroll}>
          <a href="#contact" className="scroll-down">
            Scroll Down
            <div className="down-arrow">
              <BsArrowDownCircle />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
