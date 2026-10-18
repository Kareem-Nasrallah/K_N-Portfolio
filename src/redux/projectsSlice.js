import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "React Best",
    projectName: "LUXE",
    proDescribing:
      "A complete e-commerce experience featuring product browsing, cart & wishlist, secure checkout, and multilingual responsive design.",
    technologies: [
      "react",
      "typescript",
      "Sanity",
      "Swiper",
      "formik",
      "Yup",
      "tailwindcss",
      "shadcn/ui",
    ],
    vercelHosting: "https://luxe-two-pink.vercel.app/",
  },
  {
    category: "Next Best",
    projectName: "KN Directory",
    proDescribing:
      "A web app for publishing and discovering startups with GitHub login and search functionality.",
    technologies: [
      "next",
      "typescript",
      "nextAuth",
      "Sanity",
      "Zod",
      "tailwindcss",
      "shadcn/ui",
    ],
    vercelHosting: "https://kn-directory.vercel.app/",
    githupLink: "https://github.com/Kareem-Nasrallah/kn_directory",
  },
  {
    category: "React Best",
    projectName: "Biscuit Factory System",
    proDescribing:
      "Complete Factory Management System for managing production lines, inventory, staff, and quality reports.",
    technologies: [
      "react",
      "typescript",
      "reduxToolkit",
      "formik",
      "Yup",
      "tailwindcss",
      "i18next",
      "shadcn/ui",
    ],
    vercelHosting: "https://biscuit-factory-system.vercel.app/",
    githupLink: "https://github.com/Kareem-Nasrallah/biscuit-factory-system",
  },
  {
    category: "React Mini",
    projectName: "Task Flow",
    proDescribing:
      "A site for creating to-do lists and tracking all the tasks for each list.",
    technologies: [
      "react",
      "typescript",
      "reduxToolkit",
      "Axios",
      "tailwindcss",
      "Daisyui",
      "formik",
      "Yup",
      "Bcryptjs",
    ],
    vercelHosting: "https://to-do-list-gamma-liard-48.vercel.app",
    githupLink: "https://github.com/Kareem-Nasrallah/to-do_list",
  },
  {
    category: "Next Mini",
    projectName: "Next Amazon",
    proDescribing: "E-commerce site similar to Amazon.",
    technologies: [
      "next",
      "typescript",
      "nextAuth",
      "reduxToolkit",
      "tailwindcss",
    ],
    githupLink: "https://github.com/Kareem-Nasrallah/next-amazon",
    vercelHosting: "https://next-amazon-lake.vercel.app",
  },
  {
    category: "React Mini",
    projectName: "Flavoro Foods",
    proDescribing: "Food shopping site.",
    technologies: ["react", "typescript", "reduxToolkit", "tailwindcss"],
    vercelHosting: "https://flavoro-foods.vercel.app",
    githupLink: "https://github.com/Kareem-Nasrallah/flavoro-foods",
  },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
