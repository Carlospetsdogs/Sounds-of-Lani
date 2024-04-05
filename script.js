// function playSound(soundFile) {
//     var audio = new Audio(soundFile);
//     audio.play();
// }

var currentAudio = null; // Variable to store the currently playing audio

function playSound(soundFile) {
    // Check if there's currently playing audio
    if (currentAudio !== null) {
        currentAudio.pause(); // Pause the currently playing audio
    }

    var audio = new Audio(soundFile);
    audio.play();
    
    currentAudio = audio; // Set the currently playing audio
}
