const projects = [
  {
    title: "Sistema de Inventario",
    tech: "Java + MySQL",
    color: "from-blue-500/20 to-purple-500/40",
  },
  {
    title: "Minimarket MASS",
    tech: "Spring Boot",
    color: "from-emerald-500/20 to-teal-500/40",
  },
  {
    title: "Portfolio Bento",
    tech: "React + Vite",
    color: "from-pink-500/20 to-orange-500/40",
  },
];

export default function Projects() {
  return (
    <div className="">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-50 mb-4">
        <i className="ri-layout-grid-line"></i> Proyectos
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} border border-white/10 hover:scale-[1.02] transition-all`}
          >
            <p className="text-white text-sm font-semibold">
              {project.title}
            </p>
            <p className="text-xs opacity-60">{project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
