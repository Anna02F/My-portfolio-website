import React from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

import "./nav.css";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li>
                    <a
                        href="#"
                        onClick={() => setActiveNav("#")}
                        className={activeNav === "#" ? "active" : ""}
                    >
                        <AiOutlineHome />
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        onClick={() => setActiveNav("#about")}
                        className={activeNav === "#about" ? "active" : ""}
                    >
                        <AiOutlineUser />
                    </a>
                </li>
                <li>
                    <a
                        href="#skills"
                        onClick={() => setActiveNav("#skills")}
                        className={activeNav === "#skills" ? "active" : ""}
                    >
                        <MdOutlineDesignServices />
                    </a>
                </li>
                <li>
                    <a
                        href="#portfolio"
                        onClick={() => setActiveNav("#portfolio")}
                        className={activeNav === "#portfolio" ? "active" : ""}
                    >
                        <BsBriefcase />
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onClick={() => setActiveNav("#contact")}
                        className={activeNav === "#contact" ? "active" : ""}
                    >
                        <BiMessageDetail />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
