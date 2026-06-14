import {
    ItemStack,
    EnchantmentTypes
}
from "@minecraft/server";

import { generateCondition } from "./conditions.js";
import { RARITIES } from "./rarities.js";
import {
    ENCHANTMENT_POOLS
}
from "./enchantments.js";

function getRarityValue(rarityName) {

    return RARITIES.find(
        r => r.name === rarityName
    ).value;

}

function getRarityColor(rarityName) {

    return RARITIES.find(
        r => r.name === rarityName
    ).name;

}

export function generateItem(itemData, rng, seed) {

    const item = new ItemStack(
        itemData.id,
        1
    );

    const condition =
        generateCondition(rng);

    let enchantmentCount = 0;

    if (
        itemData.enchantType &&
        rng.chance(60)
    ) {

        try {

            const enchantable =
                item.getComponent(
                    "minecraft:enchantable"
                );

            if (enchantable) {

                const possible =
                    ENCHANTMENT_POOLS[
                        itemData.enchantType
                    ];

                enchantmentCount =
                    rng.nextInt(
                        1,
                        Math.min(
                            3,
                            possible.length
                        )
                    );

                for (
                    let i = 0;
                    i < enchantmentCount;
                    i++
                ) {

                    const enchantmentId =
                        possible[
                            rng.nextInt(
                                0,
                                possible.length - 1
                            )
                        ];

                    const enchantmentType =
                        EnchantmentTypes.get(
                            enchantmentId
                        );

                    if (!enchantmentType)
                        continue;

                    enchantable.addEnchantment({
                        type:
                            enchantmentType,

                        level:
                            rng.nextInt(
                                1,
                                enchantmentType.maxLevel
                            )
                    });

                }

            }

        } catch (error) {

            console.warn(error);

        }

    }

    let value =
        Math.round(
            getRarityValue(
                getRarityColor(itemData.rarity)
            ) *
            condition.value
        );

    value += enchantmentCount * 500;

    item.setLore([
        `§r§gValue:§2 $${value}`,
        `§r§bRarity:§r ${getRarityColor(itemData.rarity)}`,
        `§r§8Condition:§r ${condition.name} (${condition.value})`,
        `§r§0LC:§r ${seed}`
    ]);

    return item;

}