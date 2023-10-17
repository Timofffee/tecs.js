/**
 * Represents a chain of systems that can be executed in sequence on a world.
 */
export class Chain {
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

/**
 * Represents a component that can be added to an entity.
 */
export class Component {
    /**
     * Create a new Component instance.
     * @param {string} name - The name of the component.
     */
    constructor(name) {
        this.name = name;
    }
}

/**
 * Represents an entity in the world.
 */
export class Entity {
    /**
     * Create a new Entity instance.
     * @param {number} id - The unique identifier for the entity.
     */
    constructor(id) {
        this.id = id;
        this.components = new Map();
    }

    /**
     * Add a component to the entity.
     * @param {Component} component - The component to be added to the entity.
     */
    addComponent(component) {
        this.components.set(component.name, component);
    }

    /**
     * Delete a component from the entity by name.
     * @param {string} componentName - The name of the component to be deleted.
     */
    deleteComponent(componentName) {
        this.components.delete(componentName);
    }

    /**
     * Get a component from the entity by name.
     * @param {string} componentName - The name of the component to be retrieved.
     * @returns {Component | undefined} The component, or undefined if not found.
     */
    getComponent(componentName) {
        return this.components.get(componentName);
    }

    /**
     * Check if the entity has a component with a specific name.
     * @param {string} componentName - The name of the component to check for.
     * @returns {boolean} True if the entity has the component, false otherwise.
     */
    hasComponent(componentName) {
        return this.components.has(componentName);
    }
}

/**
 * Represents a system that can operate on the world and its entities.
 */
export class System {
    /**
     * Create a new System instance.
     * @param {string} name - The name of the system.
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * Execute the system's logic on the provided world.
     * @param {World} world - The world on which the system operates.
     */
    execute(world) {
        console.log("Empty `execute()` in " + this.name + "(" + world.name + ")");
    }
}

/**
 * Represents the game world that contains entities.
 */
export class World {
    /**
     * Create a new World instance.
     * @param {string} name - The name of the world.
     */
    constructor(name) {
        this.name = name;
        this.entities = new Set();
        this.entityIterator = 0;
        this.freeEntities = new Set();
    }

    /**
     * Create a new entity in the world.
     * @returns {Entity} The newly created entity.
     */
    createEntity() {
        let id = 0;
        if (this.freeEntities.size > 0) {
            id = this.freeEntities.values().next().value;
            this.freeEntities.delete(id);
        } else {
            id = this.entityIterator++;
        }
        const entity = new Entity(id);
        this.entities.add(entity);
        return entity;
    }

    /**
     * Remove an entity from the world.
     * @param {Entity} entity - The entity to be removed.
     */
    removeEntity(entity) {
        this.entities.delete(entity);
        this.freeEntities.add(entity.id);
    }

    /**
     * Check if the world contains a specific entity.
     * @param {Entity} entity - The entity to check for.
     * @returns {boolean} True if the world contains the entity, false otherwise.
     */
    hasEntity(entity) {
        return this.entities.has(entity);
    }

    /**
     * Query the world for entities that have specific components and perform an action on them.
     * @param {Array<string>} components - An array of component names to filter entities.
     * @param {Function} action - The action to perform on the matching entities.
     */
    query(components, action) {
        for (const entity of this.entities) {
            let invalid = false;
            for (const targetComponent of components) {
                if (!entity.components.has(targetComponent)) {
                    invalid = true;
                    break;
                }
            }

            if (invalid) continue;

            action(entity);
        }
    }
}
