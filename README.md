# BCDIC22-RN-juego-de-vida-js-team1

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/dfe495ca5838449daf36c2bf665bd61c)](https://www.codacy.com/gh/BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team1/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team1&amp;utm_campaign=Badge_Grade)

## Tecnologies
- Javascript
- ESLint
- Jest
- Codacy
- Git

## Functional requirements
This Coding Challenge calculates the next generation of Conway’s game of life, given any starting position.

Starts with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When a next generation of the grid is calculated, these rules are followed:

- Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
- Any live cell with more than three live neighbours dies, as if by overcrowding.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any dead cell with exactly three live neighbours becomes a live cell.

Accepts an arbitrary grid of cells, and outpouts a similar grid showing the next generation.
