import { useState, useRef, useEffect } from 'react'
import './App.css'
import HeroCanvas from './components/HeroCanvas'
import { drawLine, drawCircle, animateCircle, Coordinates, generateRandomCircles, animateCircles, drawPulse} from './utils/DrawingFunctions'
import { Circle } from './utils/Circle'

function App() {

  function handleAnimationStartClick() {
    if (!canvas || !canvas.current) { return; }
    const canvasBoundaries: Coordinates = {x : canvas.current.width, y : canvas.current.height}
    // animateCircles(canvas.current, generateRandomCircles(canvasBoundaries, 100, 5), mouseRef);
    drawPulse(canvas.current, {x: 10, y:10}, {x: 0, y:0}, {x: 5, y:5});
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
          Graduating in 2026 with a Bachelor's in Computer Science from the University of Illinois Urbana-Champaign with a specialization in scientific, parallel, and high performance computing, I am looking for oppotunities to apply these skills towards real world problems, and to bring my high level of software craftsmanship to the world. 
        </p>
        
        <button onClick={handleAnimationStartClick}>See My Projects:</button>

        <HeroCanvas refs={canvas}></HeroCanvas>
      </div>
    </>
  )
}

export default App
