export class Circle {
    #x: number;
    #y: number;
    #radius: number;

    constructor(x: number, y: number, radius: number) {
        this.#x = x;
        this.#y = y;
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
}