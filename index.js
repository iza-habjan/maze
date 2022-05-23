const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const width = 600;
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
    wireframes: true,
    width,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls

const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];
World.add(world, walls);

// Maze Generation

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

// Starting Point

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);
console.log(startRow, startColumn);

const stepThroughCell = (row, column) => {
  // If I have visited the cell at [row, column], then return
  // Mark this cell as being visited
  // Assemble randomly-ordered list of neighbors
  // For each neighbor...
  // See if that neighbor is out of bounds
  // If we have visited that neighbor continue to next neighbor
  // Remove a wall from either horizontals or verticals
  // Visit that next cell
};

stepThroughCell(startRow, startColumn);
