function LastPost() {
  return (
    <>
      <div>
        <div className="card-header">
          <i className="ri-quill-pen-line"></i> Último Post
        </div>
        <p className="last-post-date">27 de septiembre de 2023</p>
        <h2>
          Introducción a la Creación de Animaciones CSS
        </h2>
        <div className="tags">
          <span className="tag">#CSS</span>
          <span className="tag">#Desarrollo</span>
        </div>
      </div>
      <p style={{ marginTop: "2.5rem", fontSize: "0.875rem", opacity: 0.6, lineHeight: 1.6 }}>
        CSS Grid es un sistema de diseño bidimensional que permite crear diseños de cuadrícula complejos y flexibles.
      </p>
    </>
  );
}

export default LastPost;
