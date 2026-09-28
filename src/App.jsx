import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Colors from "./Components/Colors/Colors";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Portfolio from "./Pages/Portfolio/Portfolio";
import WorkExperience from "./Pages/Work Experience/WorkExperience";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Colors />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "work-experience", element: <WorkExperience /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
