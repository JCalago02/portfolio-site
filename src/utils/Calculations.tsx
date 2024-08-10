
import { Circle } from "./Circle";

export interface Coordinates {
    x : number,
    y: number
}
export function findDistance(p1: Coordinates, p2: Coordinates): number {
    const delta: Coordinates = findPointDelta(p1, p2);
    return Math.sqrt(Math.pow(delta.x, 2) + Math.pow(delta.y, 2));
}

export function findPointDelta(p1: Coordinates, p2: Coordinates): Coordinates {
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

export function getPulseEndpoint(circle: Circle): Coordinates{
    const LINEWIDTH: number = 10;
    return {x: circle.getX() + LINEWIDTH*circle.getXVelocity(), y: circle.getY() + LINEWIDTH*circle.getYVelocity()};
}

export function pulseCrossesOver(pulse: Circle, goal: Circle) {
    const endPoint: Coordinates = getPulseEndpoint(pulse);
    const nextX = endPoint.x;
    const nextY = endPoint.y;

    const xGoalDiff: number = nextX - goal.getX();
    const yGoalDiff: number = nextY - goal.getY();
    const xCurrDiff: number = nextX - pulse.getX();
    const yCurrDiff: number = nextY - pulse.getY();

    const xCrossesOver = (xGoalDiff >= 0 && xCurrDiff > 0) || (xGoalDiff <= 0 && xCurrDiff < 0);
    const yCrossesOver = (yGoalDiff >= 0 && yCurrDiff > 0) || (yGoalDiff <= 0 && yCurrDiff < 0);
    return xCrossesOver && yCrossesOver;
}