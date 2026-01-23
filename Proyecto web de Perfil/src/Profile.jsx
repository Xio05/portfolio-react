import github from "./assets/iconos/git.png"
import  linkedin from "./assets/iconos/linkedin.png"
import avatar from "./assets/avatar.png"

function Profile() {
  return (
    <div className="profile">
     

 <img 
 src={avatar}
 alt="foto de perfil"
 className="profile-avatar"
 
 />

      <div className="profile-text">
        <h1>xiomara kimberly vilca</h1>
        <p>Frontend Developer & UI Designer</p>
        <span>Disponible para nuevos proyectos</span>
         <div className="profile-socials">
          <a
            href="https://github.com/Xio05"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/xiomara-vilca-185b1a3a3/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
