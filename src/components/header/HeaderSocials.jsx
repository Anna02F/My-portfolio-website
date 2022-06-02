import React from "react";
//Import icons
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="socials">
            <a href="https://github.com/Anna02F" target="_blank">
                <BsGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/aghajanyan-anna/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
        </div>
    );
};

export default HeaderSocials;
