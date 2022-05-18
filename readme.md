# Matter JS Terminology

**World** -> Object that contains all of the different 'tings' in the matter app.
**Engine** -> Reads in the current state of the World object, then calculates changes in positions of all the different shapes.
**Runner** -> Gets the Engine and World to work together. Runs about 60 times per second.
**Render** -> Whenever the Engine processes an update, Render will take a look at all the different shapes and show them on screen.

**Bodies** -> Object that represents the ability to create different sapes (circles, ractagles, squares...). It is the reference to the entire collection of all the different shapes that can be created.

# Building a Maze

1. Create a grid of "cells"
2. Pick a random starting cell
3. For that cell, build a randomly-ordered list of neighbours
4. If a neighbour has been visited before, remove it from the list
5. For each remaining neighbour "move" to it and remove the wall between those two cells
6. Repeat (from point 3.) for this new neighbour

**3 arrays**

- **grid** -> 2D array
- **verticals** -> 2D array (keeping track of vertical walls)
- **horizontals** -> 2D array (keeping track of horizontal walls)
- **boolean values** inside of verticals and horizontals array (**_true_** - there is no wall, **_false_** - there is a wall)

# Demo code

const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
Matter;

const width = 800;
const height = 600;

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const engine = Engine.create();
// world object gets created along with the Engine object; world is comming from engine
// world varible contains a representation of all the different shapes inside of World
const { world } = engine;
// creating a canvas element
const render = Render.create({
element: document.body,
engine: engine,
options: {
wireframes: false,
width,
height,
},
});
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
world,
MouseConstraint.create(engine, {
mouse: Mouse.create(render.canvas),
})
);

// Walls

const walls = [
Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
];
World.add(world, walls);

//Random Sapes

for (let i = 0; i < 20; i++) {
if (Math.random() > 0.5) {
World.add(
world,
Bodies.rectangle(Math.random() _ width, Math.random() _ height, 50, 50, {
render: {
fillStyle: "#6E8B75",
},
})
);
} else {
World.add(
world,
Bodies.circle(Math.random() _ width, Math.random() _ height, 35, {
render: {
fillStyle: "#B1BCE5",
},
})
);
}
}
