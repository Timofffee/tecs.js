/**
 * Represents a chain of systems that can be executed in sequence on a world.
 */
export default class Chain {
    /**
     * Create a new Chain instance.
     * @param {World} world - The world on which the systems in the chain will operate.
     */
    constructor(world) {
        this.world = world;
        this.systems = new Array();
    }

    /**
     * Add a system to the chain.
     * @param {System} system - The system to be added to the chain.
     */
    push(system) {
        this.systems.push(system);
        
        return this;
    }

    /**
     * Execute all systems in the chain in sequence.
     */
    execute() {
        this.systems.forEach((system) => {
            system.execute(this.world);
        });
    }

    /**
     * Clear all systems from the chain.
     */
    clear() {
        this.systems.clear();
    }
}