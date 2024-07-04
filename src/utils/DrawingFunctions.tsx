import { Circle } from "./Circle";



export function drawLine(canvas: HTMLCanvasElement | null) {
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(300, 100);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    console.log("In function");
}

export function drawCircle(canvas: HTMLCanvasElement | null, circle: Circle) {
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(circle.getX(), circle.getY(), circle.getRadius(), 0, Math.PI*2, false);
    ctx.stroke();
}

export function animateCircle(canvas: HTMLCanvasElement | null, circle: Circle) {
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;

    requestAnimationFrame(() => {animateCircle(canvas, circle)});
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "blue";
    drawCircle(canvas, circle);
    circle.setX(circle.getX() + 1);
    console.log("in circle");
}