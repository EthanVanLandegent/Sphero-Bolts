// Programmer: Ethan VanLandegent
// Team Member: Max Uppal
// Bolt ID: SB-EC76
// Date: 4-23-24
// Program: My Mini Course
// Program URL: https://edu.sphero.com/program/16743337/edit

async function startProgram() {
await roll((getHeading() + 45), 120, 1);
await roll((getHeading() - 90), 120, 1.25);
await roll((getHeading() + 45), 120, .3);
await roll((getHeading() + 45), 120, .75);
await roll((getHeading() - 45), 120, .5);
await roll((getHeading() - 90), 120, .75);
await roll((getHeading() - 90), 120, .5);
await roll((getHeading() - 45), 120, 1.25);
await roll((getHeading() + 45), 120, .3);
await roll((getHeading() + 45), 120, 1);
await roll((getHeading() - 45), 120, 0.9);
}