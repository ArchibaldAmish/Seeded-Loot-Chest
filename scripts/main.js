import "./commands/lootchest.js";
import { registerLootChestCommand } from "./commands/lootchestCommand.js";

// Call this when your mod initializes
registerLootChestCommand();

console.warn("[LootChest] Loaded successfully.");
