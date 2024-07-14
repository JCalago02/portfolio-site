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
    ctx.fill();
}

// deprecated? use as reference for mouseCoordinates
export function animateCircle(canvas: HTMLCanvasElement | null, circle: Circle, mouseCoordinatesRef: React.MutableRefObject<Coordinates | null>) {
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;

    requestAnimationFrame(() => {animateCircle(canvas, circle, mouseCoordinatesRef)});
    let velocity: Coordinates = {x : 0, y : 0};
    if (mouseCoordinatesRef.current) {
        const circleCoordinates: Coordinates = {x : circle.getX(), y : circle.getY()};
        const deltaCoordinates: Coordinates = findPointDelta(mouseCoordinatesRef.current, circleCoordinates);
        velocity = normalizePoint(deltaCoordinates, 1);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "#ffffff";
    drawCircle(canvas, circle);
    circle.setX(circle.getX() + velocity.x);
    circle.setY(circle.getY() + velocity.y);
}

export function animateCircles(canvas: HTMLCanvasElement | null, circles: Circle[], mouseCoordinatesRef: React.MutableRefObject<Coordinates | null>) {
    if (!canvas || !mouseCoordinatesRef.current) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;
    

    requestAnimationFrame(() => {animateCircles(canvas, circles, mouseCoordinatesRef)});

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "#ffffff";
    for (let counter: number = 0; counter < circles.length; counter++) {
        const circle: Circle = circles[counter];

        const distance: Coordinates = findPointDelta(mouseCoordinatesRef.current, {x: circle.getX(), y:circle.getY()})
        const velocity: Coordinates = normalizePoint(distance, Math.random() * 3);
        circle.setXVelocity(velocity.x);
        circle.setYVelocity(velocity.y);
        drawCircle(canvas, circle);
        circle.setX(circle.getX() + circle.getXVelocity());
        circle.setY(circle.getY() + circle.getYVelocity());
        
    }

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

export function normalizePoint(p: Coordinates, multiplier: number = 1): Coordinates {
    const magnitude: number = Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2)) * (1 / multiplier);
    return {    x : p.x / magnitude, 
                y : p.y / magnitude
            }
}

export function generateRandomCircles(canvasBoundaries: Coordinates, numCircles: number, radius: number): Circle[] {
    const width = canvasBoundaries.x;
    const height = canvasBoundaries.y;
    const circles: Circle[] = [];
    for (let counter: number = 0; counter < numCircles; counter++) {
        const startingX = Math.random() * width;
        const startingY = Math.random() * height;
        const startingCoordinates: Coordinates = {x : startingX, y : startingY};
        
        const startingXVelocity = Math.random() * 2 - 1;
        const startingYVelocity = Math.random() * 2 - 1;
        const startingVelocity: Coordinates = normalizePoint({x : startingXVelocity, y : startingYVelocity});
        const circle: Circle = new Circle(startingCoordinates, startingVelocity, radius);
        circles.push(circle);
    }
    return circles;
}