
// /me/formal black 2.png

import CanvasMyPhoto from "../Components/CanvasMyPhoto"

const Home = () => {

    
  return (
        <section id="home">
            <div className="home-content">
                <h3>Hi! Im</h3>
                <h1>Kareem Nasrallah</h1>
                <div className="text-animate">
                <h2>Front-end Developer</h2>
                </div>
                <p>
                Front-end developer with advanced web development training, with a
                focus on creating responsive applications.<br />
                Skilled in crafting user-friendly interfaces and passionate about
                delivering seamless user experiences.
                </p>
                <a download href="./K_Nasrallah's CV.pdf" className="btn">
                Download CV <i className="bx bx-download" />
                </a>
                <div className="social-icons">
                <a target="_blank" href="https://www.facebook.com/kareem.nasrallah.904">
                    <i className="bx bxl-facebook" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/kareem-nasrallah-181772282/">
                    <i className="bx bxl-linkedin" />
                </a>
                <a target="_blank" href="https://github.com/Kareem-Nasrallah">
                    <i className="bx bxl-github" />
                </a>
                </div>
            </div>
            <div className="home-image">
                <CanvasMyPhoto/>
            </div>
        </section>
  )
}



export default Home