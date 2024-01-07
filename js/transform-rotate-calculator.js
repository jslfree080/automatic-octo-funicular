class TransformRotateCalculator {
    #initialX;
    #initialY;
    #initialStep;
    #stepBefore;
    #section;
    #rotatedX;
    #rotatedY;

    constructor(initialX, initialY, initialStep, stepBefore, section) {
        this.#initialX = initialX;
        this.#initialY = initialY;
        this.#initialStep = initialStep;
        this.#stepBefore = stepBefore;
        this.#section = section;
        this.#printArray();
    }

    get unitAngle() {
        return 360 / this.#section;
    }

    set unitAngle(newAngle) {
        this.#section = 360 / newAngle;
    }

    #returnArray(n) {
        this.#rotatedX = this.#initialX + Math.sin(2 * Math.PI / this.#section * n) * (325 - this.#initialY);
        this.#rotatedY = this.#initialY + (1 - Math.cos(2 * Math.PI / this.#section * n)) * (325 - this.#initialY);
        return [n, n * this.unitAngle, this.#rotatedX, this.#rotatedY];
    }

    #printArray() {
        console.log(`Let's get started! Unit angle: ${this.unitAngle}`)
        for (let step = this.#initialStep; step < this.#stepBefore; step++) {
            console.log(this.#returnArray(step));
        }
    }
}
/*
new TransformRotateCalculator(325, 85, 0, 12, 12);
new TransformRotateCalculator(325, 125, -4.5, 5.5, 96);
*/