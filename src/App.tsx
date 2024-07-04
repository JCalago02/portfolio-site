import { useState, useRef, useEffect } from 'react'
import './App.css'
import HeroCanvas from './components/HeroCanvas'
import { drawLine, drawCircle, animateCircle } from './utils/DrawingFunctions'
import { Circle } from './utils/Circle'

function App() {

  function handleAnimationStartClick() {
    const circle = new Circle(10, 10, 10);
    console.log("Calling animate: ");
    animateCircle(canvas.current, circle)
  }

  const [count, setCount] = useState(12)
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvas.current == null) {
      return;
    }
    canvas.current.width = window.innerWidth - 2;
    canvas.current.height = window.innerHeight - 2;
    // drawLine(canvas.current);
  }, [])
  return (
    <>
      <div>
      
      </div>
      <h1>Hi! My Name is Jericho Calago</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>
        Graduating in 2026 with a Bachelor's in Computer Science from the University of Illinois Urbana-Champaign. I yearn to grow and learn, and love failing fast and iterating quickly. With 
        my passion for writing performant and elegant software solutions, I'm eagerly pursuing software roles that allow are high impact, dynamically challenging, and make use of my abilities.
      </p>
      
      <button onClick={handleAnimationStartClick}>See My Projects:</button>

      <HeroCanvas refs={canvas}></HeroCanvas>
    </>
  )
}

export default App
