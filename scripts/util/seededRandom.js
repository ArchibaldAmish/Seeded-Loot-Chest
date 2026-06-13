export class SeededRandom {

    constructor(seed) {

        this.seed = seed >>> 0;

    }

    next() {

        this.seed =
            (1664525 * this.seed + 1013904223)
            >>> 0;

        return this.seed / 4294967296;

    }

    nextInt(min, max) {

        return Math.floor(
            this.next() * (max - min + 1)
        ) + min;

    }

    chance(percent) {

        return (
            this.next() * 100
        ) < percent;

    }

}