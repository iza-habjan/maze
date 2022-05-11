const { Engine, Render, Runner, World, Bodies } = Matter;

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const engine = Engine.create();
// world object gets created along with the Engine object; world is comming from engine
const { world } = engine;
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

const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true,
});
World.add(world, shape);
