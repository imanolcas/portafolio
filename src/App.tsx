import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Nav />
      <Home />
      <Aboutme />
      <Projects />
      <Contact/>
    </>
  )
}

export default App
