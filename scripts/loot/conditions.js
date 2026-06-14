export const CONDITIONS = [

    {
        name: "§4Ancient Scars§r",
        min: 0.5000,
        max: 0.7499
    },

    {
        name: "§cDamaged§r",
        min: 0.7500,
        max: 0.9999
    },

    {
        name: "§8Worn§r",
        min: 1.0000,
        max: 1.2499
    },

    {
        name: "§3Used§r",
        min: 1.2500,
        max: 1.9999
    },

    {
        name: "§2Pristine§r",
        min: 2.0000,
        max: 3.0000
    }

];

export function generateCondition(rng) {

    const roll = rng.next() * 100;

    let selected;

    if (roll < 20) {

        selected = CONDITIONS[0];

    } else if (roll < 50) {

        selected = CONDITIONS[1];

    } else if (roll < 80) {

        selected = CONDITIONS[2];

    } else if (roll < 95) {

        selected = CONDITIONS[3];

    } else {

        selected = CONDITIONS[4];

    }

    const value =
        selected.min +
        rng.next() *
        (selected.max - selected.min);

    return {

        name: selected.name,

        value: Number(
            value.toFixed(4)
        )

    };

}