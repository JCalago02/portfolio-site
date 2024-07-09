import { useState, useRef, useEffect } from 'react'
import './App.css'
import HeroCanvas from './components/HeroCanvas'
import { drawLine, drawCircle, animateCircle, Coordinates} from './utils/DrawingFunctions'
import { Circle } from './utils/Circle'

function App() {

  function handleAnimationStartClick() {
    const circle = new Circle(10, 10, 10);
    console.log("Calling animate: ");
    animateCircle(canvas.current, circle, mouseRef);
  }

  function handleMouseMove(e: MouseEvent) {
    if (canvas.current) {
      const canvasRect = canvas.current.getBoundingClientRect();
      const canvasX = e.clientX - canvasRect.left;
      const canvasY = e.clientY - canvasRect.top;
      mouseRef.current = {x : canvasX, y : canvasY};
    }
  }

  const [count, setCount] = useState(12);
  const valueRef: React.MutableRefObject<number> = useRef(count);
  const mouseRef: React.MutableRefObject<Coordinates | null> = useRef(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvas.current == null) {
      return;
    }
    canvas.current.width = window.innerWidth - 2;
    canvas.current.height = window.innerHeight - 2;
    // drawLine(canvas.current);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [])

  useEffect(() => {
    valueRef.current = count;
    console.log(valueRef.current)
  }, [count])

  return (
    <>
      <div className="mouse-move-wrapper-div">
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
      </div>
    </>
  )
}

export default App
