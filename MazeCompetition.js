// Programmer: Ethan VanLandegent
// Team Member: Max Uppal
// Bolt ID: SB-EC76
// Date: 4-30-24
// Program: Maze Competition
// Program URL: https://edu.sphero.com/program/16788337/edit

async function startProgram() {
	// Programmer: Maxwell Uppal - Start Text & Audio Checkpoint Commit - Date:
	await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true)
	await speak("Start", true);
	// Programmer: Ethan VanLandegent - Blue LED Checkpoint Commit - Date:
	await roll((getHeading() + 0), 50, 3.5);
	setMainLed({ r: 0, g: 0, b: 255 });
	//Programmer: Maxwell Uppal - Sound One Checkpoint Commit - Date:
	await roll((getHeading() + 90), 50, 2.4);
	await Sound.ScienceFiction.Blaster.play(true);


	//Programmer: Ethan VanLandegent - Red LED Checkpoint Commit - Date: 



	//Programmer: Maxwell Uppal - Sound Two Checkpoint Commit - Date:



	//Programmer Ethan VanLandegent - Green LED Checkpoint Commit - Date:



	//Programmer Maxwell Uppal - Purple LED & Sound Three Checkpoint Commit - Date:



	//Programmer Ethan VanLandegent - Finish Text & Audio Checkpoint Commit - Date:




}
