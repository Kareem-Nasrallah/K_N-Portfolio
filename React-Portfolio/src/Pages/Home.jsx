import { useEffect, useRef } from "react";
import CanvasMyPhoto from "../Components/CanvasMyPhoto";

const Home = () => {
  
  const homeImgRef = useRef(null)
  const homeContRef = useRef(null)

  useEffect(()=>{

    if (!homeImgRef.current || !homeContRef.current) return;

    const apearElementes = ()=>{
      homeImgRef.current?.classList.add("show-items")
      homeContRef.current?.classList.add("show-items")
    }

    const observer = new MutationObserver((mutationsList)=>{
      for (const mutation  of mutationsList) {
        if(mutation.type === 'childList'){
          apearElementes();
        }
      }
    })

    if(homeContRef && homeImgRef){
      observer.observe(homeContRef,{attributes: true})
      observer.observe(homeImgRef,{attributes: true})
    }

    return()=>{
      observer.disconnect
    }
  },[homeContRef,])

  return (
    <section id="home">
      <div ref={homeContRef} className="home-content fromlift">
        <h3>Hi! Im</h3>
        <h1>Kareem Nasrallah</h1>
        <div className="text-animate">
          <h2>Front-end Developer</h2>
        </div>
        <p>
          Front-end developer with advanced web development training, with a
          focus on creating responsive applications.
          <br />
          Skilled in crafting user-friendly interfaces and passionate about
          delivering seamless user experiences.
        </p>
        <a download href="./K_Nasrallah's CV.pdf" className="btn">
          Download CV <i className="bx bx-download" />
        </a>
        <div className="social-icons">
          <a
            target="_blank"
            href="https://www.facebook.com/kareem.nasrallah.904"
          >
            <i className="bx bxl-facebook" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kareem-nasrallah-181772282/"
          >
            <i className="bx bxl-linkedin" />
          </a>
          <a target="_blank" href="https://github.com/Kareem-Nasrallah">
            <i className="bx bxl-github" />
          </a>
        </div>
      </div>
      <div ref={homeImgRef} className="home-image fromright">
        <CanvasMyPhoto />
      </div>
    </section>
  );
};

export default Home;
