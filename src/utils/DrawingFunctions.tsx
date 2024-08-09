import { Circle } from "./Circle";

export interface Coordinates {
    x: number;
    y: number;
}

export interface CircleAnimationProps {
    canvas: HTMLCanvasElement | null, 
    circles: Circle[], 
    mouseRef: React.MutableRefObject<Coordinates | null>
}

export interface PulseAnimationProps {
    curr: Coordinates,
    goal: Coordinates,
    velocity: Coordinates
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
export function animateCircle(canvas: HTMLCanvasElement | null, circle: Circle, mouseRef: React.MutableRefObject<Coordinates | null>) {
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;

    requestAnimationFrame(() => {animateCircle(canvas, circle, mouseRef)});
    let velocity: Coordinates = {x : 0, y : 0};
    if (mouseRef.current) {
        const circleCoordinates: Coordinates = {x : circle.getX(), y : circle.getY()};
        const deltaCoordinates: Coordinates = findPointDelta(mouseRef.current, circleCoordinates);
        velocity = normalizePoint(deltaCoordinates, 1);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "#ffffff";
    drawCircle(canvas, circle);
    circle.setX(circle.getX() + velocity.x);
    circle.setY(circle.getY() + velocity.y);
}

export function animate(canvasNullable: HTMLCanvasElement | null, circleProps: CircleAnimationProps, pulseProps: PulseAnimationProps) {
    if (!canvasNullable || !circleProps.mouseRef.current) return;
    const canvas: HTMLCanvasElement = canvasNullable;
    const ctxNullable: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctxNullable) return;
    const ctx: CanvasRenderingContext2D = ctxNullable;
   

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        animateCircles(canvas, ctx, circleProps.circles);

        drawPulse(ctx, pulseProps);

        requestAnimationFrame(draw);
    }

    draw();
}

function animateCircles(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, circles: Circle[]) {
    ctx.strokeStyle = "#545454";
    ctx.fillStyle = "#545454";
    for (let counter: number = 0; counter < circles.length; counter++) {
        const circle: Circle = circles[counter];

        if (circle.getX() < -5 || circle.getX() > canvas.width + 5) {
            circle.setXVelocity(circle.getXVelocity() * -1)
        }
        if (circle.getY() < -5 || circle.getY() > canvas.height + 5) {
            circle.setYVelocity(circle.getYVelocity() * -1)
        }
        drawCircle(canvas, circle);
        circle.setX(circle.getX() + circle.getXVelocity());
        circle.setY(circle.getY() + circle.getYVelocity());
        
    }
}

function drawPulse(ctx: CanvasRenderingContext2D, pulseProps: PulseAnimationProps) {
    const start: Coordinates = pulseProps.curr;
    const goal: Coordinates = pulseProps.goal;
    const velocity: Coordinates = pulseProps.velocity;
    const end: Coordinates = {x: start.x + 2*velocity.x, y: start.y + 2*velocity.y };
    
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    start.x += velocity.x
    start.y += velocity.y
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = "white";
    ctx.stroke();

    if (findDistance(end, goal) < 1) {
        pulseProps.goal = {x: 700, y: 500};
        pulseProps.velocity = normalizePoint(findPointDelta(pulseProps.goal, pulseProps.curr), 6);
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
        const startingVelocity: Coordinates = normalizePoint({x : startingXVelocity, y : startingYVelocity}, 0.2);
        const circle: Circle = new Circle(startingCoordinates, startingVelocity, radius);
        circles.push(circle);
    }
    return circles;
}