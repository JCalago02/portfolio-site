import { getPulseEndpoint } from "./Calculations";
import { Circle } from "./Circle";
import { Coordinates } from "./Calculations";

export function drawLine(ctx: CanvasRenderingContext2D) {

    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(300, 100);
    ctx.strokeStyle = "blue";
    ctx.stroke();
}

export function drawCircle(ctx: CanvasRenderingContext2D, circle: Circle) {

    ctx.beginPath();
    ctx.arc(circle.getX(), circle.getY(), circle.getRadius(), 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
}

export function drawPulse(ctx: CanvasRenderingContext2D, pulse: Circle) {
    ctx.beginPath();
    ctx.moveTo(pulse.getX(), pulse.getY());
    
    const endPoint: Coordinates = getPulseEndpoint(pulse);

    ctx.lineTo(endPoint.x, endPoint.y);
    ctx.strokeStyle = "white";
    ctx.stroke();
}