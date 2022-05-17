const { Engine, Render, Runner, World, Bodies } = Matter;

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
    width: 800,
    height: 600,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
];
World.add(world, walls);

World.add(world, Bodies.rectangle(200, 200, 50, 50));