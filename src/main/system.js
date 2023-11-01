/**
 * Represents a system that can operate on the world and its entities.
 */
export default class System {
    /**
     * Create a new System instance.
     * @param {string} name - The name of the system.
     * @param {function} executor - The function to be executed by the system.
     */
    constructor(name, executor) {
        this.name = name;
        if (executor != null) {
            this.execute = executor;
        }
    }

    /**
     * Execute the system's logic on the provided world.
     * @param {World} world - The world on which the system operates.
     */
    execute(world) {
        console.log(
            "Empty `execute()` in " + this.name + "(" + world.name + ")"
        );
    }
}