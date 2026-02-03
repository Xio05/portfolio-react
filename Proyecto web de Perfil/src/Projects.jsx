import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
      <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
        <div className="card-header" style={{ position: 'relative', zIndex: 10 }}>
          <i className="ri-layout-grid-line"></i> Proyectos
        </div>

        <div className="project-gradient">
          <div style={{
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}></div>
        </div>
      </Link>
    </>
  );
}

export default Projects;
