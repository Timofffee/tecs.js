import Entity from "./entity.js";

/**
 * Represents the game world that contains entities.
 */
export default class World {
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

    addEntity(entity) {
        let id = 0;
        if (this.freeEntities.size > 0) {
            id = this.freeEntities.values().next().value;
            this.freeEntities.delete(id);
        } else {
            id = this.entityIterator++;
        }
        entity.id = id;
        this.entities.add(entity);
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
