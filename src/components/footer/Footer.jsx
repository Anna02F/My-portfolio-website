import React from "react";
//import assets
import LOGO from "../../assets/footer-logo.svg";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <p>
                    &copy;2022|
                    <a className="logo-text" href="#">
                        AA
                    </a>
                    | All rights reserved.
                </p>
                <a className="footer__logo" href="#">
                    <img src={LOGO} alt="Logo: double uppercase A"></img>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
