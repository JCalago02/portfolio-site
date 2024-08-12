import './App.css'
import Experience from './sections/experience/Experience';
import HeroCanvas from './sections/hero/HeroCanvas'
import HeroInfo from './sections/hero/HeroInfo';

function App() {
  return (
    <>
      <div className="mouse-move-wrapper-div">
        <HeroInfo></HeroInfo>
        <HeroCanvas></HeroCanvas>
        <Experience></Experience> 
      </div>
    </>
  )
}

export default App
