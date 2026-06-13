import { BlockPermutation }
from "@minecraft/server";

import { generateLoot }
from "../loot/generateLoot.js";

export function spawnChest(
    player,
    location,
    seed,
    amount
) {

    const dimension =
        player.dimension;

    const block =
        dimension.getBlock(
            location
        );

    if (!block) {

        player.sendMessage(
            "§cUnable to place chest."
        );

        return;
    }

    block.setPermutation(
        BlockPermutation.resolve(
            "minecraft:chest"
        )
    );

    const inventory =
        block.getComponent(
            "minecraft:inventory"
        );

    if (!inventory) {

        player.sendMessage(
            "§cFailed to access chest inventory."
        );

        return;
    }

    const container =
        inventory.container;

    const loot =
        generateLoot(
            seed,
            amount
        );

    for (
        let slot = 0;
        slot < loot.length;
        slot++
    ) {

        container.setItem(
            slot,
            loot[slot]
        );

    }

    player.sendMessage(
        `§aChest spawned successfully!\n` +
        `§aLocation: x:${location.x} y:${location.y} z:${location.z}\n` +
        `§gSeed: ${seed}`
    );

}