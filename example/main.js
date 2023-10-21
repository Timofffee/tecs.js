import { World, Component, System, Chain } from "../tecs.js";

const world = new World("World");

const entity = world.createEntity();
entity.addComponent(new Component("Component1"));
const component = new Component("Component2");
component.value = 2;
entity.addComponent(component);

const entity2 = world.createEntity();
const component2 = new Component("Component2");
component2.value = 8;
entity2.addComponent(component2);
entity2.addComponent(new Component("Component3"));

const chain = new Chain(world);
chain.push(new System("System1"));

const system2 = new System("System2");
system2.execute = (world) => {
    world.query(["Component1", "Component2"], (entity) => {
        console.log("Update Entity " + entity.id);
        return true;
    });
};
chain.push(system2);

const system3 = new System("System3");
system3.execute = (world) => {
    world.query(["Component2"], (entity) => {
        console.log(
            "Update Entity " +
                entity.id +
                " with value " +
                entity.getComponent("Component2").value
        );
        if (entity.getComponent("Component2").value === 8) {
            entity.deleteComponent("Component2");
        }
        return true;
    });
};
chain.push(system3);

chain.push(system3);

chain.execute();
