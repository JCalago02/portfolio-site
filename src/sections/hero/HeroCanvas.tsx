import "./HeroCanvas.css"
import { useRef, useEffect, useCallback } from "react";
import { Coordinates, generateRandomCircles } from "../../utils/Calculations";
import { CircleAnimationProps, PulseAnimationProps, animate } from "../../utils/Animations";
import { Circle } from "../../utils/Circle";

export default function HeroCanvas() {
    const mouseRef: React.MutableRefObject<Coordinates | null> = useRef(null);
    
    function handleMouseMove(e: MouseEvent) {
       // if (canvas.current) {
       // const canvasRect = canvas.current.getBoundingClientRect();
       // const canvasX = e.clientX - canvasRect.left;
       // const canvasY = e.clientY - canvasRect.top;
       // mouseRef.current = {x : canvasX, y : canvasY};
       // }
    }
     
    function handleAnimationStartClick(canvas: HTMLCanvasElement) {
        console.log("Handle start called"); 

        const canvasBoundaries: Coordinates = {x : canvas.width, y : canvas.height};
        const circles: Circle[] = generateRandomCircles(canvasBoundaries, 100, 5);
        const pulseStart: Circle = new Circle({x: 0, y: 0}, {x: 1, y: 1}, 1);

        const circleProps: CircleAnimationProps = {canvas: canvas, circles: circles, mouseRef: mouseRef};
        const pulseProps: PulseAnimationProps = {pulse: pulseStart, goalI: 0, circles: circles}
        animate(canvas, circleProps, pulseProps);
    }

    const canvasRef = useCallback((canvas: HTMLCanvasElement) => {
        console.log("Ref called");
        if (canvas !== null) {
            canvas.width = window.innerWidth - 20;
            canvas.height = window.innerHeight - 2;
            handleAnimationStartClick(canvas);
            // window.addEventListener('mousemove', handleMouseMove);
            // return () => window.removeEventListener('mouseMove', handleMouseMove);

        }
    }, []);
     
    return (
        <canvas 
            className="hero-canvas" 
            ref = {canvasRef}> 
        </canvas>       
    )
}