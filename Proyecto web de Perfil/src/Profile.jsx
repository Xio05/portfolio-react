import github from "./assets/iconos/git.png"
import linkedin from "./assets/iconos/linkedin.png"
import avatar from "./assets/avatar.png"

function Profile() {
  return (
    <header className="profile-header">
      <div className="profile-top">
        <div className="profile-avatar-container">
          <img
            src={avatar}
            alt="Xiomara Kimberly Vilca"
            className="profile-avatar"
          />
        </div>
        <div className="profile-info">
          <h1>Xiomara Kimberly Vilca</h1>
          <p className="role"> BACKEND / FRONTEND EN FORMACIÓN</p>
          <p className="location">Estudiante de Computación e Informática con conocimientos en desarrollo web y bases de datos. Manejo Java, Python, MySQL y JavaScript. Responsable, analítico y con interés en crecer como  Programador Junior.</p>
        </div>
      </div>

      <div className="status-badge">
        <span className="status-dot"></span>
        <span className="status-text">Disponible para nuevos proyectos</span>
      </div>

      <div className="profile-socials">
        <a href="https://github.com/Xio05" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="ri-github-line"></i>
        </a>
        <a href="https://www.linkedin.com/in/xiomara-vilca-185b1a3a3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="ri-linkedin-line"></i>
        </a>
        {/* Added placeholders for professional look matching snippet */}
       
        <a href="#" aria-label="Mail"><i className="ri-mail-line"></i></a>
      </div>
    </header>
  )
}

export default Profile
