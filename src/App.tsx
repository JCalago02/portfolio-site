import './App.css'
import HeroCanvas from './sections/hero/HeroCanvas'
import HeroInfo from './sections/hero/HeroInfo';

function App() {
  return (
    <>
      <div className="mouse-move-wrapper-div">
        <HeroInfo></HeroInfo>
        <HeroCanvas></HeroCanvas>
        <div>Testing placing an element below</div>
      </div>
    </>
  )
}

export default App
