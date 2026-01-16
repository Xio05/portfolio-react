
import Card from "./Card";
import LastPost from "./LastPost";

function MainGrid() {
  return (
    <section className="main">
      <div className="card">
        <h3>Projects</h3>
        <p>Algunos de los proyectos en los que he trabajado.</p>
        



      </div>

      <div className="card">
        <h3>Skills</h3>
        <p>Tecnologías y herramientas que utilizo.</p>
      </div>

      <div className="card">
        <h3>About</h3>
        <p>Un poco sobre mí y mi camino como desarrolladora.</p>
      </div>

      <div className="card">
        <h3>Contact</h3>
        <p>Formas de ponerte en contacto conmigo.</p>
      </div>
    </section>
  )
}

export default MainGrid
