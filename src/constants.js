//Import assets
import ImgTrafalgar from "./assets/portfolio/trafalgar.png";
import ImgModal from "./assets/portfolio/modal.png";
import ImgCards from "./assets/portfolio/expanding-cards.png";
import ImgWavingForm from "./assets/portfolio/waving-form.png";
import ImgSoundBoard from "./assets/portfolio/animal-sound-board.png";
import ImgFAQ from "./assets/portfolio/faq.png";

export const INDEED_ACHIEVEMENTS = [
  "Collaborated effectively with cross-functional teams to implement cohesive, user-centric UIs.",
  "Led theme support upgrades, ensuring consistent branding and smooth rollouts.",
  "Improved accessibility across multiple products, leading to a 75% backlog refinement and resolving key usability issues.",
  "Optimized code quality and architecture, adopting reusable components and resulting in a scalable, maintainable internal tool.",
];

export const KAPUT_AM_ACHIEVEMENTS = [
  "Increased user engagement by 10% through competitive analysis, research, and the implementation of new UI components.",
  "Improved website performance by adopting SEO best practices and refactoring the codebase.",
  "Collaborated with fellow developers to brainstorm and develop project launch ideas.",
];

export const PROJECTS = [
  {
    id: 1,
    image: ImgTrafalgar,
    title: "A landing page for healthcare providers with functional components",
    github: "https://github.com/Anna02F/Trafalgar-landinge-page-example",
    demo: "https://anna02f.github.io/Trafalgar-landinge-page-example/",
  },
  {
    id: 2,
    image: ImgModal,
    title:
      "Modal component. Click the button to see the waving hand animation using GSAP",
    github: "https://github.com/Anna02F/Waving-hand",
    demo: "https://quiet-entremet-356369.netlify.app/",
  },
  {
    id: 3,
    image: ImgWavingForm,
    title: "Login form. Click the input to see the waving animation",
    github: "https://github.com/Anna02F/Waving-form",
    demo: "https://anna02f.github.io/Waving-form/",
  },
  {
    id: 4,
    image: ImgCards,
    title: "Expanding Cards with CSS smooth animation.",
    github: "https://github.com/Anna02F/Expanding-cards",
    demo: "https://anna02f.github.io/Expanding-cards/",
  },
  {
    id: 5,
    image: ImgSoundBoard,
    title: "Animal Sound Board. Click the animal to listen the sound",
    github: "https://github.com/Anna02F/Animal-sound-board",
    demo: "https://anna02f.github.io/Animal-sound-board/",
  },
  {
    id: 6,
    image: ImgFAQ,
    title: "FAQ page with filtered search bar and collapsible contents",
    github: "https://github.com/Anna02F/Faq-collapsible-component",
    demo: "https://anna02f.github.io/Faq-collapsible-component/",
  },
];
