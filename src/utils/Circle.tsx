import { Coordinates } from "./Calculations";

export class Circle {
    #x: number;
    #y: number;
    #xVelocity: number;
    #yVelocity: number;
    #radius: number;

    constructor(start: Coordinates, velocity: Coordinates, radius: number = 1) {
        this.#x = start.x;
        this.#y = start.y;
        this.#xVelocity = velocity.x;
        this.#yVelocity = velocity.y;
        this.#radius = radius;
    }

    getX(): number {
        return this.#x;
    }

    getY(): number {
        return this.#y;
    }

    getRadius(): number {
        return this.#radius;
    }

    setX(x: number): void {
        this.#x = x;
    }

    setY(y: number): void {
        this.#y = y;
    }

    getXVelocity(): number {
        return this.#xVelocity;
    }

    getYVelocity(): number {
        return this.#yVelocity;
    }

    setXVelocity(xVelocity: number): void {
        this.#xVelocity = xVelocity;
    }

    setYVelocity(yVelocity: number): void {
        this.#yVelocity = yVelocity;
    }

    toString(): string {
        return `x: ${this.#x}, y: ${this.#y}, r: ${this.#radius}`;
    }

    getCoordinates(): Coordinates {
        return {x: this.#x, y: this.#y};
    }

    getVeocity(): Coordinates {
        return {x: this.#xVelocity, y: this.#yVelocity};
    }

    setVelocity(velocity: Coordinates) {
        this.#xVelocity = velocity.x;
        this.#yVelocity = velocity.y;
    }
}