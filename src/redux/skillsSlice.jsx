import { createSlice } from "@reduxjs/toolkit";
import {
  SiNextdotjs,
  SiFormik,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiShadcnui,
  SiGit,
  SiHtml5,
  SiGithub,
  SiGitlab,
  SiReact,
  SiCss3,
  SiSass,
  SiRedux,
  SiElementor,
} from "react-icons/si";
import { BsShieldShaded, BsWordpress } from "react-icons/bs";

const initialState = {
  skills: {
  coreDevelopment: [
    {
      id: "html5",
      icon: <SiHtml5 className="iconComponent html" />,
      name: "HTML 5",
      description:
        "Builds well-structured, semantic, and accessible web page layouts while providing a solid foundation for responsive and user-friendly interfaces.",
      position: "top-[15%] left-0",
      parintClass: "html",
    },
    {
      id: "javascript",
      icon: <SiJavascript className="iconComponent javascript" />,
      name: "Javascript",
      description:
        "Creates interactive, dynamic, and functional web experiences by handling user interactions, application logic, and real-time changes across web interfaces.",
      position: "top-[16%] right-0",
      parintClass: "javascript",
    },
    {
      id: "typescript",
      icon: <SiTypescript className="iconComponent typescript" />,
      name: "Typescript",
      description:
        "Adds strong type safety to JavaScript applications, helping improve code reliability, maintainability, scalability, and the overall development experience.",
      position: "top-[3.5%] right-[11%]",
      parintClass: "typescript",
    },
    {
      id: "react",
      icon: <SiReact className="iconComponent react" />,
      name: "React",
      description:
        "Builds reusable and interactive user interfaces using component-based architecture, making applications easier to develop, maintain, and scale.",
      position: "-top-[4.5%] right-[26%]",
      parintClass: "react",
    },
    {
      id: "elementor",
      icon: <SiElementor className="iconComponent elementor" />,
      name: "Elementor",
      description:
        "Creates and customizes responsive WordPress websites using a visual page builder while maintaining flexible layouts and user-friendly page structures.",
      position: "-top-[3.5%] left-40",
      parintClass: "elementor",
    },
    {
      id: "wordpress",
      icon: <BsWordpress className="iconComponent wordpress" />,
      name: "Wordpress",
      description:
        "Develops and manages customizable websites and content-driven platforms, with the flexibility to extend functionality through themes, plugins, and custom solutions.",
      position: "top-[4.5%] left-[10%]",
      parintClass: "wordpress",
    },
    {
      id: "next",
      icon: <SiNextdotjs className="iconComponent next" />,
      name: "Next.js",
      description:
        "Builds fast, scalable, and production-ready web applications with React while taking advantage of features such as routing, rendering, and performance optimization.",
      position: "-top-[7%] left-[40%]",
      parintClass: "next",
    },
  ],

  uiStyling: [
    {
      id: "css3",
      icon: <SiCss3 className="iconComponent css" />,
      name: "CSS 3",
      description:
        "Styles responsive and visually polished web interfaces while controlling layouts, animations, spacing, typography, and the overall user experience.",
      position: "top-[29.5%] -left-[6.5%]",
      parintClass: "css",
    },
    {
      id: "scss",
      icon: <SiSass className="iconComponent scss" />,
      name: "SCSS",
      description:
        "Organizes and enhances CSS through variables, nesting, reusable structures, and other features that make large styling codebases easier to maintain.",
      position: "top-[46.5%] -left-[7%]",
      parintClass: "scss",
    },
    {
      id: "bootstrap",
      icon: <SiBootstrap className="iconComponent bootstrap" />,
      name: "Bootstrap",
      description:
        "Creates responsive layouts and consistent user interfaces using a flexible component-based framework with a predefined grid system and reusable styling utilities.",
      position: "bottom-[22%] -left-[3.5%]",
      parintClass: "bootstrap",
    },
    {
      id: "tailwindcss",
      icon: <SiTailwindcss className="iconComponent tailwind" />,
      name: "Tailwind CSS",
      description:
        "Builds custom and responsive user interfaces using a utility-first approach, allowing precise control over layouts, spacing, typography, and visual styling.",
      position: "bottom-[9%] left-[5%]",
      parintClass: "tailwind",
    },
    {
      id: "shadcn/u",
      icon: <SiShadcnui className="iconComponent shadcn" />,
      name: "Shadcn/ui",
      description:
        "Uses accessible, customizable, and reusable UI components to build consistent interfaces while maintaining control over the design and component structure.",
      position: "-bottom-[2%] left-[19.5%]",
      parintClass: "shadcn",
    },
  ],

  applicationTools: [
    {
      id: "reduxToolkit",
      icon: <SiRedux className="iconComponent redux-toolkit" />,
      name: "Redux Toolkit",
      description:
        "Manages application state using a predictable and efficient Redux architecture, simplifying state logic and making complex application data easier to control.",
      position: "top-[35%] -right-[6.5%]",
      parintClass: "redux-toolkit",
    },
    {
      id: "nextAuth",
      icon: <BsShieldShaded className="iconComponent next-auth" />,
      name: "Next Auth",
      description:
        "Handles authentication and user sessions in Next.js applications, providing a structured approach for managing login flows and authenticated users.",
      position: "bottom-[30%] -right-10",
      parintClass: "next-auth",
    },
    {
      id: "formik",
      icon: <SiFormik className="iconComponent formik" />,
      name: "Formik",
      description:
        "Simplifies form handling, validation, and submission in React applications while helping manage form state and user input efficiently.",
      position: "bottom-[12.5%] right-[2.5%]",
      parintClass: "formik",
    },
    {
      id: "git",
      icon: <SiGit className="iconComponent git" />,
      name: "Git",
      description:
        "Tracks code changes and manages development history through version control, making it easier to work safely on features, fixes, and different branches.",
      position: "bottom-[0.5%] right-[15%]",
      parintClass: "git",
    },
    {
      id: "gitHub",
      icon: <SiGithub className="iconComponent github" />,
      name: "GitHub",
      description:
        "Hosts repositories and supports collaborative software development through version control, pull requests, code reviews, and project collaboration workflows.",
      position: "-bottom-[5.5%] right-[29%]",
      parintClass: "github",
    },
    {
      id: "gitLab",
      icon: <SiGitlab className="iconComponent gitlab" />,
      name: "GitLab",
      description:
        "Supports repository management, team collaboration, version control, and streamlined development workflows throughout the software development process.",
      position: "-bottom-[7.2%] left-[38%]",
      parintClass: "gitlab",
    },
  ],
},
  selectedSkill: {
      id: "next",
      icon: <SiNextdotjs className="iconComponent next" />,
      name: "Next.js",
      description:
        "Builds fast, scalable, and production-ready web applications with React while taking advantage of features such as routing, rendering, and performance optimization.",
      position: "-top-[7%] left-[40%]",
      parintClass: "next",
    },
};

const SkillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    selectSkill: (state, action)=>{
      state.selectedSkill = action.payload
    }
  },
});

export default SkillsSlice.reducer;
export const { selectSkill } = SkillsSlice.actions