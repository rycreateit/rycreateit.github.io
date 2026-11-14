import './App.css'
import visualDesigner from './assets/visual-designer.png'
import webDeveloper from './assets/web-developer.png'

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

            <img
              src={visualDesigner}
              alt="Visual Designer"
              className="designer-label"
            />

            <img
              src={webDeveloper}
              alt="Web Developer"
              className="developer-label"
            />
          </div>

          <div className="portrait-placeholder">
          </div>
        </div>
      </section>
    </main>
  )
}

export default App