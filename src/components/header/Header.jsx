import React from "react";

import CTALinks from "./CTALinks";
import HeaderSocials from "./HeaderSocials";
import { BsArrowDownCircle } from "react-icons/bs";
import LOGO from "../../assets/logo.svg";

import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="top-nav">
                <a className="logo" href="#">
                    <img src={LOGO}></img>
                </a>
                <HeaderSocials />
            </div>
            <div className="container header__container">
                <h4>Hello! I'm</h4>
                <h1>Anna Aghajanyan</h1>
                <h4>Frontend/UI developer</h4>
                <h5>
                    Developing user interfaces and responsive design using UI/UX
                    best practices and research
                </h5>
                <CTALinks />
                <div className="header__scroll">
                    <a href="#portfolio" className="scroll-down">
                        Scroll Down
                    </a>
                    <div className="down-arrow">
                        <BsArrowDownCircle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
