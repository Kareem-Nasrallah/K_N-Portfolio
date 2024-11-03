
const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className="main-text">
            <span>What can i do for you</span>
            <h2><span>Latest Projects</span></h2>
        </div>
        <div className="conttainer">
            <div className="fillter-buttons">
            <button data-filter="all">All</button>
            <button data-filter=".React">React App</button>
            <button data-filter=".Interactive">Interactive</button>
            <button data-filter=".CRUDS">CRUDS</button>
            </div>
            <div className="portfolio-gallery">
            {/* this field filled by JS () */}
            </div>
        </div>
    </section>

  )
}

export default Portfolio