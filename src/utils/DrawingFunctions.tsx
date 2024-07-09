import { Circle } from "./Circle";

export interface Coordinates {
    x: number;
    y: number;
  }
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

export function animateCircle(canvas: HTMLCanvasElement | null, circle: Circle, mouseCoordinatesRef: React.MutableRefObject<Coordinates | null>) {
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;

    let velocity: Coordinates = {x : 0, y : 0};
    if (mouseCoordinatesRef.current) {
        const circleCoordinates: Coordinates = {x : circle.getX(), y : circle.getY()};
        const deltaCoordinates: Coordinates = findPointDelta(mouseCoordinatesRef.current, circleCoordinates);
        velocity = normalizePoint(deltaCoordinates);
    }


    requestAnimationFrame(() => {animateCircle(canvas, circle, mouseCoordinatesRef)});
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "blue";
    drawCircle(canvas, circle);
    circle.setX(circle.getX() + velocity.x);
    circle.setY(circle.getY() + velocity.y);
}

export function findDistance(p1: Coordinates, p2: Coordinates) {
    const delta: Coordinates = findPointDelta(p1, p2);
    return Math.sqrt(Math.pow(delta.x, 2) + Math.pow(delta.y, 2));
}

function findPointDelta(p1: Coordinates, p2: Coordinates): Coordinates {
    const xDelta: number = p1.x - p2.x;
    const yDelta: number = p1.y - p2.y;
    return {x : xDelta, y : yDelta}
}

export function normalizePoint(p: Coordinates): Coordinates {
    const magnitude: number = Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2));
    return {    x : p.x / magnitude, 
                y : p.y / magnitude
            }
}