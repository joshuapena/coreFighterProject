"use strict";

var start = function(paramsOne, controlOptionsOne, paramsTwo, controlOptionsTwo) {
	document.getElementById("world").style.display = "inline";
	document.getElementById("instructions").style.display = "inline";
	document.getElementById("startButton").style.display = "none";
    document.getElementById("instructionsChoose").style.display = "none";
    document.getElementById("sexUndo").style.display = "none";
    document.getElementById("ethnicityUndo").style.display = "none";
    document.getElementById("majorUndo").style.display = "none";
    document.getElementById("controllerPrompt").style.display = "none";
    document.getElementById("controllerPromptTwo").style.display = "none";
	
	var sprites = initGame();
	var audio = initSound();

    paramsOne.setPercent();
    paramsTwo.setPercent();
	
	var game = new Game(document.getElementById("world"), sprites, audio, paramsOne, controlOptionsOne, paramsTwo, controlOptionsTwo);
}

function initGame() {
	var spriteLoader = new SpriteLoader();
	var sprites = {};
	var spriteNames = [];
	for (var i = 1; i < 9; i++) {
		spriteNames.push("connor/connorL" + i);
		spriteNames.push("connor/connorR" + i);
        spriteNames.push("evilConnor/evilConnorL" + i);
        spriteNames.push("evilConnor/evilConnorR" + i);
	}
	spriteLoader.load("./assets/images", spriteNames, ".png", function (loadedSprites) {
		for (var spriteName in loadedSprites) {
			sprites[spriteName] = loadedSprites[spriteName];
		}
	});
	
	return sprites;
}

function initSound() {
	var soundLoader = new SoundLoader();
	var audio = {};
	var audioNames = [];
	var extensions = [];
	soundLoader.load("./assets/sounds", audioNames, extensions, function (loadedAudio) {
		for (var audioName in loadedAudio) {
			//audio[audioName] = loadedAudio[audioName];
			//audio[audioName].setVolume(20);
		}
	});
	return audio;
}
