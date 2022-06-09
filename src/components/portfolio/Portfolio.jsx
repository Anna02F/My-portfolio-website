import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Import assets
import ImgTrafalgar from "../../assets/portfolio/trafalgar.png";
import ImgCarousel from "../../assets/portfolio/carousel.png";
import ImgSidebar from "../../assets/portfolio/hidden-sidebar.png";
import ImgAccordion from "../../assets/portfolio/accordion.png";
import ImgModal from "../../assets/portfolio/modal.png";
import ImgCards from "../../assets/portfolio/expanding-cards.png";
import ImgWavingForm from "../../assets/portfolio/waving-form.png";
import ImgSoundBoard from "../../assets/portfolio/animal-sound-board.png";
import ImgFAQ from "../../assets/portfolio/faq.png";

import "./portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        id: 1,
        image: ImgTrafalgar,
        title: "A landing page for healthcare providers with functional components",
        github: "https://github.com/Anna02F/Trafalgar-landinge-page-example",
        demo: "https://anna02f.github.io/Trafalgar-landinge-page-example/",
    },
    {
        id: 2,
        image: ImgCarousel,
        title: "Carousel component with pure JavaScript",
        github: "https://github.com/Anna02F/Carousel",
        demo: "https://anna02f.github.io/Carousel/",
    },
    {
        id: 3,
        image: ImgSidebar,
        title: "Hidden Sidebar Menu. Click the menu button to see the Sidebar",
        github: "https://github.com/Anna02F/Hidden-sidebar",
        demo: "https://anna02f.github.io/Hidden-sidebar/",
    },
    {
        id: 4,
        image: ImgAccordion,
        title: "Accordion component. Click the title to see the content with smooth animation",
        github: "https://github.com/Anna02F/Accordion",
        demo: "https://anna02f.github.io/Accordion/",
    },
    {
        id: 5,
        image: ImgModal,
        title: "Modal component. Click the button to see the waving hand animation using GSAP",
        github: "https://github.com/Anna02F/Waving-hand",
        demo: "https://quiet-entremet-356369.netlify.app/",
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
        github: "https://github.com/Anna02F/Expanding-cards",
        demo: "https://anna02f.github.io/Expanding-cards/",
    },
    {
        id: 8,
        image: ImgSoundBoard,
        title: "Animal Sound Board. Click the animal to listen the sound",
        github: "https://github.com/Anna02F/Animal-sound-board",
        demo: "https://anna02f.github.io/Animal-sound-board/",
    },
    {
        id: 9,
        image: ImgFAQ,
        title: "FAQ page with filtered search bar and collapsible contents",
        github: "https://github.com/Anna02F/Faq-collapsible-component",
        demo: "https://anna02f.github.io/Faq-collapsible-component/",
    },
];

const Works = () => {
    //Store the reference to the box div
    const projectsRef = useRef();
    const project = gsap.utils.selector(projectsRef);
    const tl = useRef();

    //Wait until DOM has been rendered
    useLayoutEffect(() => {
        tl.current = gsap
            .timeline(
                {
                    scrollTrigger: {
                        trigger: ".portfolio",
                        start: "top 50%",
                    },
                    ease: "power3.out",
                },
                "-=.5"
            )
            .from(
                project(".portfolio__card"),
                {
                    scale: 0.1,
                    opacity: 0,
                    stagger: 0.4,
                },
                "-=1"
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
                                            <h4 className="card__heading">
                                                {title}
                                            </h4>
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
