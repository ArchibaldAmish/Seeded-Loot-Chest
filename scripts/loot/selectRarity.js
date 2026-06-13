import { RARITIES } from "./rarities.js";

export function selectRarity(rng) {

    const totalWeight =
        RARITIES.reduce(
            (sum, rarity) =>
                sum + rarity.weight,
            0
        );

    const roll =
        rng.next() * totalWeight;

    let current = 0;

    for (const rarity of RARITIES) {

        current += rarity.weight;

        if (roll <= current) {
            return rarity;
        }

    }

    return RARITIES[0];

}