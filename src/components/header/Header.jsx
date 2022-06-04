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
    const forthHeading = useRef();
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
                forthHeading.current,
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
                    <span
                        className="heading-line-first__inner"
                        ref={firstHeading}
                    >
                        Hello! I'm
                    </span>
                </h4>
                <h1 className="heading-line-second">
                    <span
                        className="heading-line-second__inner"
                        ref={secondHeading}
                    >
                        Anna Aghajanyan
                    </span>
                </h1>
                <h4 className="heading-line-third">
                    {" "}
                    <span
                        className="heading-line-third__inner"
                        ref={thirdHeading}
                    >
                        Frontend/UI developer
                    </span>
                </h4>
                <h5 className="heading-line-forth">
                    <span
                        className="heading-line-forth__inner"
                        ref={forthHeading}
                    >
                        Developing user interfaces and responsive design using
                        UI/UX best practices and research
                    </span>
                </h5>
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
