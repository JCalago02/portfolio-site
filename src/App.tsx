import './App.css'
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
      </div>
    </>
  )
}

export default App
