const experiences = [
  {
    company: "Papaya Group",
    period: "2014 - 2014",
    role: "Diseñador Gráfico",
    initials: "PG",
    color: "b91d1d",
  },
  
];

export default function Experience() {
  return (
    <div className="">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-50 mb-8">
        <i className="ri-briefcase-line"></i> Experiencia
      </div>

      <div className="flex-1 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${exp.initials}&backgroundColor=${exp.color}`}
                className="w-6 h-6 rounded-full"
                alt={exp.company}
              />
            </div>

            <div>
              <p className="text-white text-sm font-medium">
                {exp.company} —{" "}
                <span className="text-slate-500 font-normal">
                  {exp.period}
                </span>
              </p>
              <p className="text-xs opacity-50">{exp.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-10">
        <button className="bg-white/5 hover:bg-white/10 border border-white/5 py-3 rounded-xl text-[11px] font-bold text-white flex items-center justify-center gap-2">
          <i className="ri-profile-line opacity-50"></i> Read.cv
        </button>

        <button className="bg-white/5 hover:bg-white/10 border border-white/5 py-3 rounded-xl text-[11px] font-bold text-white flex items-center justify-center gap-2">
          <i className="ri-download-line opacity-50"></i> Descargar CV
        </button>
      </div>
    </div>
  );
}
