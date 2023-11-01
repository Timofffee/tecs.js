/**
 * Represents a component that can be added to an entity.
 */
export default class Component {
    /**
     * Create a new Component instance.
     * @param {string} name - The name of the component.
     */
    constructor(name, options = {}) {
        this.name = name;
        Object.assign(this, options);
    }
}