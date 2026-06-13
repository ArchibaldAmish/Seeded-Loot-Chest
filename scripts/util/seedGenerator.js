const MIN_SEED = -2147483648;
const MAX_SEED = 2147483647;

export function generateRandomSeed() {

    return Math.floor(
        Math.random() * (MAX_SEED - MIN_SEED + 1)
    ) + MIN_SEED;

}

export function isValidSeed(seed) {

    if (!Number.isInteger(seed)) {
        return false;
    }

    return (
        seed >= MIN_SEED &&
        seed <= MAX_SEED
    );

}

export function parseSeed(input) {

    const seed = Number(input);

    if (!isValidSeed(seed)) {
        return null;
    }

    return seed;

}

export {
    MIN_SEED,
    MAX_SEED
};