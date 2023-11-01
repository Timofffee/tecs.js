/**
 * Represents an entity in the world.
 */
export default class Entity {
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