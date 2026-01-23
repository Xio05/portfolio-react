import LastPost from "./LastPost";
import Experience from "./Experience";
import Projects from "./Projects";
import NowPlaying from "./NowPlaying";
import Languages from "./Languages";
import Contact from "./Contact";

function MainGrid() {
  return (
    <section className="main-grid">

      <div className="card last-post">
        <LastPost />
      </div>

      <div className="card experience">
        <Experience />
      </div>

      <div className="card projects">
        <Projects />
      </div>

      <div className="card now-playing">
        <NowPlaying />
      </div>

      <div className="card languages">
        <Languages />
      </div>

      <div className="card contact">
        <Contact />
      </div>

    </section>
  );
}

export default MainGrid;

