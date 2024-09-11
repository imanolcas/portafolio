import "./Nav.css"


export default function Nav () {
    return(
        <nav className="nav">
            <ul className="nav-ul">
                <li className="nav-li"><a href="#">Home</a></li>
                <li className="nav-li"><a href="#">About me</a></li>
                <li className="nav-li"><a href="#">Projects</a></li>
                <li className="nav-li"><a href="#">Contact me</a></li>
                <li className="nav-li"><a href="#">Github</a></li>
            </ul>   
      </nav>
    )
}