# tecs.js

**tecs.js** is a simple JavaScript library for creating a basic Entity-Component-System (ECS) game framework. It allows you to organize and manage game entities, components, systems, and the game world efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Introduction
**tecs.js** provides the core components required to implement the ECS pattern in your JavaScript game or simulation. It includes classes for defining entities, components, systems, and the game world.

The library is damn small (just over 100 lines of clean code) and uses fairly simple and straightforward code.

## Getting Started

To get started with **tecs.js**, you can follow these steps:

1. **Get library:**

   Just download `tecs.js ` file to your project

2. **Include the Library:**

   To use **tecs.js** in your project, include the `tecs.js` file in your HTML:

   ```html
   <script type="module" src="tecs.js"></script>
   ```

3. **Create Your Game Logic:**

   Start defining your game entities, components, systems, and the game world using **tecs.js** classes.

4. **Enjoy Building Your Game:**

   With **tecs.js**, you can easily structure your game code using the ECS pattern, making it more organized and efficient.

## Usage

Here's a brief example of how to use **tecs.js**:

```javascript
// Create a new world
const myWorld = new World("My Game World");

// Create entities and add components to them
const entity1 = myWorld.createEntity();
entity1.addComponent(new Component("Position"));
entity1.addComponent(new Component("Renderable"));

// Create a system
class MySystem extends System {
    execute(world) {
        // Your custom system logic here
    }
}
const mySystem = new MySystem("Custom System");

// Add the system to the chain
const systemChain = new Chain(myWorld);
systemChain.push(mySystem);

// Execute systems on the world
systemChain.execute();
```

You can build upon this basic structure to create more complex game logic using the ECS pattern.


## License

**tecs.js** is licensed under the [MIT License](LICENSE).

---

Enjoy building your games with **tecs.js**! If you have any questions or need assistance, please feel free to reach out to the community.