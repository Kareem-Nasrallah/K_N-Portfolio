
const Skills = () => {

const skillsInfo = [
    {
        imgId:"bxl-html5",
        name:"HTML 5",
    },
    {
        imgId:"bxl-react",
        name:"React",
    },
    {
        imgId:"bxl-bootstrap",
        name:"Bootstrap",
    },
    {
        imgId:"bxl-css3",
        name:"CSS 3",
    },
    {
        imgId:"bxl-sass",
        name:"scss",
    },
    {
        imgId:"bxl-typescript",
        name:"typescript",
    },
    {
        imgId:"bxl-git",
        name:"git",
    },
    {
        imgId:"bxl-javascript",
        name:"javascript",
    },
    {
        imgId:"bxl-github",
        name:"gitHub",
    },
]

const TecSkills = skillsInfo.map((skillInfo, index)=>{
    return(
        <div class="skill-box">
        <i class={`bx ${skillInfo.imgId} after`}></i>
        <p>{skillInfo.name}</p>
        </div>
    )
})

  return (
    <section id="skills">
        <div className="main-text">
            <span> tecknical and profeessional </span>
            <h2><span>My Skills</span></h2>
        </div>
        <div className="all-skills">
            <div className="skill-left">
                <h3>Tecknical Skills</h3>
                <div id="tec-skills">
                    {TecSkills}
                </div>
            </div>
            <div className="skill-right">
            <h3>Profeessional Skills</h3>
            <div className="professional">
                {/* this field filled by JS () */}
            </div>
            </div>
        </div>
    </section>

  )
}

export default Skills