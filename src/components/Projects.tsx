import "./projects.css"
import { projects } from '../json/projects';



interface projectProps{
  "title" : "string"
  "description": "string"
  "image": "string"
  "link": "string"
}

console.log(projects)

export default function Projects (){
    return(
      <div className='projects'>
        <h3>Projects</h3>
        <ul>
          {
            projects.map((el:projectProps) => {
              const imageUrl = `./src/assets/${el.image}`
              return(
                <li>
                  <a href={el.link}><div className="link-project" style={{backgroundImage:`url(${imageUrl})`}}></div></a>
                  <h4>{el.title}</h4>
                  <p>{el.description}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
}