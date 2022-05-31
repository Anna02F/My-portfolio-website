import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ImgCarousel from "../../assets/portfolio/carousel.png";
import ImgSidebar from "../../assets/portfolio/hidden-sidebar.png";
import ImgAccordion from "../../assets/portfolio/accordion.png";
import ImgModal from "../../assets/portfolio/modal.png";
import ImgTabs from "../../assets/portfolio/tabs.png";
import ImgCards from "../../assets/portfolio/expanding-cards.png";
import ImgWavingForm from "../../assets/portfolio/waving-form.png";
import ImgSoundBoard from "../../assets/portfolio/animal-sound-board.png";

import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        id: 1,
        image: ImgCarousel,
        title: "Carousel component with pure JavaScript",
        github: "https://github.com/Anna02F/Carousel",
        demo: "https://anna02f.github.io/Carousel/",
    },
    {
        id: 2,
        image: ImgSidebar,
        title: "Hidden Sidebar Menu. Click the menu button to see the Sidebar",
        github: "https://github.com/Anna02F/Hidden-sidebar",
        demo: "https://anna02f.github.io/Hidden-sidebar/",
    },
    {
        id: 3,
        image: ImgAccordion,
        title: "Accordion component. Click the title to see the content with smooth animation",
        github: "https://github.com/Anna02F/Accordion",
        demo: "https://anna02f.github.io/Accordion/",
    },
    {
        id: 4,
        image: ImgModal,
        title: "Modal component. Click the button to see the waving hand animation using GSAP",
        github: "https://github.com/Anna02F/Waving-hand",
        demo: "https://quiet-entremet-356369.netlify.app/",
    },
    {
        id: 5,
        image: ImgTabs,
        title: "Tabs component. Click the tab to see the content",
        github: "https://github.com/Anna02F/Tabs-component",
        demo: "https://anna02f.github.io/Tabs-component/",
    },
    {
        id: 6,
        image: ImgWavingForm,
        title: "Login form. Click the input to see the waving animation",
        github: "https://github.com/Anna02F/Waving-form",
        demo: "https://anna02f.github.io/Waving-form/",
    },
    {
        id: 7,
        image: ImgCards,
        title: "Expanding Cards with CSS smooth animation.",
        github: "https://github.com/Anna02F",
        demo: "https://github.com/Anna02F/Expanding-cards",
    },
    {
        id: 8,
        image: ImgSoundBoard,
        title: "Animal Sound Board. Click the animal to listen the sound",
        github: "https://github.com/Anna02F/Animal-sound-board",
        demo: "https://anna02f.github.io/Animal-sound-board/",
    },
];

const Works = () => {
    //Store the reference to the box div
    const projectsRef = useRef();
    const project = gsap.utils.selector(projectsRef);

    //Wait until DOM has been rendered
    useLayoutEffect(() => {
        gsap.fromTo(
            project(".portfolio__card"),
            { scale: 0.1, opacity: 0, rotation: 0 },
            {
                opacity: 1,
                scale: 1,
                rotation: 360,
                ease: "power2.out",
                stagger: {
                    each: 0.3,
                    grid: "auto",
                    from: "start",
                },
                scrollTrigger: {
                    trigger: ".portfolio",
                    start: "top center",
                },
            }
        );
    });

    const onMouseEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            scale: 1.1,
            duration: 0.2,
            ease: "expo.inOut",
        });
    };

    const onMouseLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            scale: 1,
            duration: 0.3,
            ease: "expo.inOut",
        });
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="section__header">
                <h2>My Portfolio</h2>
            </div>
            <div className="container portfolio__container">
                <div className="javaScript-projects">
                    <h3>Projects with HTML, CSS and Pure JavaScript</h3>
                    <div className="projects-wrapper" ref={projectsRef}>
                        {data.map(({ id, image, title, github, demo }) => {
                            return (
                                <article
                                    key={id}
                                    className="card portfolio__card"
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                >
                                    <div className="portfolio__card-inner">
                                        <div className="card__body">
                                            <div className="card__image">
                                                <a href={demo} target="_blank">
                                                    {/* {"website url "} */}
                                                    <img
                                                        src={image}
                                                        alt="project1"
                                                    ></img>
                                                </a>
                                            </div>
                                            <h4>{title}</h4>
                                            <div className="card__links">
                                                <a
                                                    className="btn btn--outline"
                                                    href={github}
                                                    target="_blank"
                                                >
                                                    Github
                                                </a>
                                                <a
                                                    className="btn btn--primary"
                                                    href={demo}
                                                    target="_blank"
                                                >
                                                    Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
