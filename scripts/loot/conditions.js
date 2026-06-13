export const CONDITIONS = [

    {
        name: "Ancient Scars",
        min: 0.5000,
        max: 0.7499
    },

    {
        name: "Damaged",
        min: 0.7500,
        max: 0.9999
    },

    {
        name: "Worn",
        min: 1.0000,
        max: 1.2499
    },

    {
        name: "Used",
        min: 1.2500,
        max: 1.9999
    },

    {
        name: "Pristine",
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