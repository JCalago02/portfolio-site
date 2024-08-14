import './App.css'
import Contact from './sections/contact/Contact';
import Experience from './sections/experience/Experience';
import HeroCanvas from './sections/hero/HeroCanvas'
import HeroInfo from './sections/hero/HeroInfo';
import Projects from './sections/projects/Projects';

function App() {
  return (
    <>
      <div className="mouse-move-wrapper-div">
        <HeroInfo></HeroInfo>
        <HeroCanvas></HeroCanvas>
        <Experience></Experience> 
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
