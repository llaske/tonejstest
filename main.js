function play() {
    console.log('pressed');
    var player = new Tone.Player('./cow.mp3');
    var pitchShift = new Tone.PitchShift({
        pitch: 2
    }).toMaster();
    player.connect(pitchShift);
    player.autostart = true;
}