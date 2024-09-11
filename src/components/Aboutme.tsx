import "./aboutme.css"

export default function Aboutme (){
    return(
        <div className='aboutme'>
          <h3 className="aboutme-title">About me</h3>
        <div className="aboutme-content">
          <div className="aboutme-description">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur non tempora ex exercitationem voluptatibus reprehenderit commodi facere, autem iure, rerum beatae quod culpa assumenda soluta dignissimos accusantium error obcaecati nulla?</p>
            </div>
            <div className="aboutme-skills">
              <h3>Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Css</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
      </div>
    )
    
}