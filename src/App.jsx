import './App.css'
import portfolioProfile from './assets/portfolio-profile.png'
import aboutReference from './assets/about-reference.jpg'

function App() {
  return (
    <main>
      <nav>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#blogs">BLOGS</a>
        <a href="#contact">CONTACT</a>  
      </nav>

      <section id="home" className="home">
        <div className="home-content">
          <div className="hero-text">
            {[1, 2, 3, 4, 5, 6, 7].map((line) => (
              <h1 key={line}>Hi, I’m <em>Ryza Lozano</em></h1>
            ))}

            <div className="designer-label">
              Visual Designer
            </div>

            <div className="developer-label">
              Web Developer
            </div>
          </div>

          <div className="portrait-placeholder">
            <img src={portfolioProfile} alt="Portrait of Ryza Lozano" />
          </div>
        </div>
      </section>
      {/* Temporary placeholder: This reference image will be replaced with the actual About Me layout and coded widgets. */}
      <section id="about" className="about">
        <img src={aboutReference} alt="About Me design reference" className="about-reference"/>
      </section>
    </main>
  )
}

export default App