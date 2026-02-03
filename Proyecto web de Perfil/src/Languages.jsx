function Languages() {
  const icons = [
    // Frontend
    { class: "devicon-html5-plain colored", title: "HTML" },
    { class: "devicon-css3-plain colored", title: "CSS" },
    { class: "devicon-javascript-plain colored", title: "JavaScript" },
    { class: "devicon-react-original colored", title: "React" },
    { class: "devicon-bootstrap-plain colored", title: "Bootstrap" },
    // Backend
    { class: "devicon-csharp-plain colored", title: "C#" },
    { class: "devicon-dotnetcore-plain colored", title: ".NET" },
    { class: "devicon-java-plain colored", title: "Java" },
    { class: "devicon-kotlin-plain colored", title: "Kotlin" },
    { class: "devicon-python-plain colored", title: "Python" },
    // DB
    { class: "devicon-microsoftsqlserver-plain colored", title: "SQL Server" },
    { class: "devicon-mysql-plain colored", title: "MySQL" },
    { class: "devicon-mongodb-plain colored", title: "MongoDB" },
    
    { class: "devicon-json-plain colored", title: "JSON" },
    { class: "devicon-git-plain colored", title: "Git" },
    { class: "devicon-github-original colored", title: "GitHub" },
    { class: "devicon-visualstudio-plain colored", title: "Visual Studio" },
  ];

  return (
    <div className="slider">
      <div className="slide-track">
        {icons.map((icon, index) => (
          <div className="slide" key={`original-${index}`}>
            <i className={`${icon.class} lang-icon`} title={icon.title}></i>
          </div>
        ))}
        {icons.map((icon, index) => (
          <div className="slide" key={`duplicate-${index}`}>
            <i className={`${icon.class} lang-icon`} title={icon.title}></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
