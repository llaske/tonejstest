var Tone;
function start() {
	requirejs(['tone'], function (t) {
		Tone = t;
	});
}

function play() {
	console.log('pressed');
	var player = new Tone.Player();
	var pitchShift = new Tone.PitchShift({
		pitch: 2
	});
	player.load("cow.mp3");
	pitchShift.toMaster();
	player.connect(pitchShift);
	player.autostart = true;
}
