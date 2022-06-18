import React from "react";

import CV from "../../assets/Anna_Aghajanyan_CV_Frontend_Developer.pdf";

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
