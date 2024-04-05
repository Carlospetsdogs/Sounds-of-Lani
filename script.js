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

// Get the navbar element
var navbar = document.getElementById("navbar");

// Get all h2 elements within the "d-grid gap-2" container
var h2Elements = document.querySelectorAll(".d-grid.gap-2 h2");

// Iterate over each h2 element
h2Elements.forEach(function(h2) {
    // Create a button element
    var button = document.createElement("button");

    // Set button text to h2 text
    button.textContent = h2.textContent;

    // Add click event listener to scroll to the corresponding h2 element when the button is clicked
    button.addEventListener("click", function() {
        h2.scrollIntoView({ behavior: "instant", block: "start" });
    });

    // Append the button to the navbar
    navbar.appendChild(button);
});
