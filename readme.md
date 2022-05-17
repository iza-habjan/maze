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
