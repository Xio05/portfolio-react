import { Link } from "react-router-dom";

function MyProjects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Moderna",
            description: "Una plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#"
        },
        {
            id: 2,
            title: "Dashboard de Finanzas",
            description: "Aplicación para visualización de datos financieros en tiempo real con gráficos interactivos y reportes exportables.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
            tags: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
            link: "#"
        },
        {
            id: 3,
            title: "App de Gestión de Tareas",
            description: "Herramienta de productividad para equipos con asignación de tareas, chat integrado y seguimiento de tiempo.",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1632&auto=format&fit=crop",
            tags: ["React Native", "Redux", "Express", "PostgreSQL"],
            link: "#"
        },
        {
            id: 4,
            title: "Portfolio Creativo",
            description: "Plantilla de portafolio para diseñadores y fotógrafos con galerías de mampostería y transiciones suaves.",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1555&auto=format&fit=crop",
            tags: ["HTML5", "SASS", "JavaScript", "GSAP"],
            link: "#"
        }
    ];

    return (
        <div className="my-projects-container">
            <Link to="/" className="back-button">
                <i className="ri-arrow-left-line"></i> Volver al inicio
            </Link>

            <header className="projects-header">
                <h1>Mis Proyectos</h1>
                <p>Una colección de mis trabajos más recientes y destacados.</p>
            </header>

            <div className="projects-grid-professional">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <a href={project.link} className="view-project-btn">
                                    Ver Proyecto <i className="ri-arrow-right-up-line"></i>
                                </a>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;
