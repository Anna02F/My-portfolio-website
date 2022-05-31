import React from "react";

import CV from "../../assets/CV_Anna_Aghajanyan.pdf";

const CTALinks = () => {
    return (
        <div className="cta-links">
            <a className="btn btn--outline" href={CV} download>
                Download CV
            </a>
            <a className="btn btn--primary" href="#contact">
                Let's talk
            </a>
        </div>
    );
};

export default CTALinks;
