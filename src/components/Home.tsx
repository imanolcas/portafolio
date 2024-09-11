import "./home.css"

export default function Home (){
    return(
       <main className='home'>
        <div className="home-me">
          <div className="home-text">
            <h1 className="home-title">Mauro Imanol Casco</h1>
            <p className="home-subtitle">Front-end developer</p>
            <ul className="home-social">
              <li><a href="">Linkedin</a></li>
              <li><a href="">Github</a></li>
            </ul>
          </div>
          <img src="" alt="Foto mia" />
        </div>
        <a className="descarga-cv" href='./assets/Curriculum Vitae Profesional Moderno Azul (1).pdf' download="Curriculum Vitae Profesional Moderno Azul.pdf">Descargar CV</a>
      </main> 
    )
    
}