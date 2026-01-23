const languages = [
  { name: "Inglés ", level: "  Avanzado", percent: 90 },
  { name: "Español  ", level: "  Nativo", percent: 100 },
];

export default function Languages() {
  return (
    <div className="">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-50">
        <i className="ri-global-line"></i> Idiomas
      </div>

      {languages.map((lang, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white">{lang.name}</span>
            <span className="text-slate-500 text-xs">{lang.level}</span>
          </div>

          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-blue-500"
              style={{ width: `${lang.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
