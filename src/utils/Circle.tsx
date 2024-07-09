export class Circle {
    #x: number;
    #y: number;
    #xVelocity: number;
    #yVelocity: number;
    #radius: number;

    constructor(x: number, y: number, radius: number) {
        this.#x = x;
        this.#y = y;
        this.#xVelocity = 1;
        this.#yVelocity = 1;
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
}