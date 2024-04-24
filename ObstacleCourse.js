// Programmer: Ethan VanLandegent
// Team Member: Max Uppal
// Bolt ID: SB-EC76
// Date: 4-24-24
// Program: My Obstacle Course - Sandbox
// Program URL: https://edu.sphero.com/program/16752539/edit

async function startProgram() {
	//Maxwell Uppal
	await roll((getHeading() + 35), 120, 1.57);
	//Ethan VanLandegent
	await delay(1);
	await roll((getHeading() - 35), 120, 1.15);
	//Maxwell Uppal
	await delay(1);
	await roll((getHeading() - 90), 120, 1.2);
}