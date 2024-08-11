import { Coordinates, normalizePoint, findPointDelta, pulseCrossesOver } from "./Calculations";
import { Circle } from "./Circle";
import { getColor } from "./Colors";
import { drawCircle, drawPulse } from "./Drawings";

export interface CircleAnimationProps {
    canvas: HTMLCanvasElement | null, 
    circles: Circle[], 
    mouseRef: React.MutableRefObject<Coordinates | null>
}

export interface PulseAnimationProps {
    pulse: Circle,
    goalI: number,
    circles: Circle[]
}


export function animate(canvas: HTMLCanvasElement, circleProps: CircleAnimationProps, pulseProps: PulseAnimationProps) {
    const ctxNullable: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctxNullable) return;
    const ctx: CanvasRenderingContext2D = ctxNullable;
   

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        animatePulse(ctx, pulseProps);

        animateCircles(canvas, ctx, circleProps.circles);

        requestAnimationFrame(draw);
    }

    draw();
}

function animateCircles(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, circles: Circle[]) {
    ctx.strokeStyle = ctx.fillStyle = getColor("dim-stroke");
    for (let counter: number = 0; counter < circles.length; counter++) {
        const circle: Circle = circles[counter];
        
        circle.setX(circle.getX() + circle.getXVelocity());
        circle.setY(circle.getY() + circle.getYVelocity());
       
        drawCircle(ctx, circle);
        
        const xOutOfBounds: boolean = circle.getX() < -5 || circle.getX() > canvas.width + 5;
        const yOutOfBounds: boolean = circle.getY() < -5 || circle.getY() > canvas.height + 5;

        if (xOutOfBounds) {
            circle.setXVelocity(circle.getXVelocity() * -1)
        }
        if (yOutOfBounds) {
            circle.setYVelocity(circle.getYVelocity() * -1)
        }
        
    }
}

function animatePulse(ctx: CanvasRenderingContext2D, pulseProps: PulseAnimationProps) {
    const pulse: Circle = pulseProps.pulse;
    var goal: Circle = pulseProps.circles[pulseProps.goalI];

    if (pulseCrossesOver(pulse, goal)) {
        pulseProps.goalI = (pulseProps.goalI + 1) % pulseProps.circles.length;
        goal = pulseProps.circles[pulseProps.goalI];
    }
    
    const newVelocity: Coordinates = normalizePoint(findPointDelta(goal.getCoordinates(), pulse.getCoordinates()), 5);
    pulse.setVelocity(newVelocity);
    pulse.setX(pulse.getX() + pulse.getXVelocity());
    pulse.setY(pulse.getY() + pulse.getYVelocity());
    console.log(pulse.getCoordinates()); 
    drawPulse(ctx, pulse); 
}

export function animateCircleFollowMouse(canvas: HTMLCanvasElement | null, circle: Circle, mouseRef: React.MutableRefObject<Coordinates | null>) {
    if (!canvas) return;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) return;

    requestAnimationFrame(() => {animateCircleFollowMouse(canvas, circle, mouseRef)});
    let velocity: Coordinates = {x : 0, y : 0};
    if (mouseRef.current) {
        const circleCoordinates: Coordinates = {x : circle.getX(), y : circle.getY()};
        const deltaCoordinates: Coordinates = findPointDelta(mouseRef.current, circleCoordinates);
        velocity = normalizePoint(deltaCoordinates, 1);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "#ffffff";
    drawCircle(ctx, circle);
    circle.setX(circle.getX() + velocity.x);
    circle.setY(circle.getY() + velocity.y);
}