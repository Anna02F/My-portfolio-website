import React from "react";

import CTALinks from "./CTALinks";
import HeaderSocials from "./HeaderSocials";
import LOGO from "../../assets/logo.svg";
import Me from "../../assets/me.png";

import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <a className="logo" href="#">
                <img src={LOGO}></img>
            </a>
            <div className="container header__container">
                <h4>Hello! I'm</h4>
                <h1>Anna Aghajanyan</h1>
                <h4>
                    Frontend/UI developer specializing in developing user
                    interfaces and responsive design using UI/UX best practices
                    and research
                </h4>
                <CTALinks />
                <div className="me">
                    <img src={Me} alt="me" />
                </div>
                <div className="header-icons">
                    <HeaderSocials />
                    <a href="#portfolio" className="scroll-down">
                        Scroll Down
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
