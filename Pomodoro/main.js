// Variables
let workTittle = document.getElementById('Work');
let breakTittle = document.getElementById('Break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";
let timerInterval;

// Display the initial values
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// Start Timer
function start() {
    // Hide Play button and show Reset button
    document.getElementById('Play').style.display = "none";
    document.getElementById('Reset').style.display = "block";

    // Initialize time
    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let breakCount = 0;

    // Countdown function
    let timerFunction = () => {
        // Update display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // Decrement seconds
        seconds--;

        if (seconds == 0) {
            workMinutes--;
            if (workMinutes == -1) {
                if (breakCount % 2 === 0) {
                    // Switch to break
                    workMinutes = breakMinutes;
                    breakCount++;
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                } else {
                    // Continue work
                    workMinutes = workTime;
                    breakCount++;
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    };

    // Start countdown
    timerInterval = setInterval(timerFunction, 1000);
}

// Reset Timer
function resetTimer() {
    clearInterval(timerInterval); // Stop the timer
    document.getElementById('Play').style.display = "block";
    document.getElementById('Reset').style.display = "none";

    // Reset display to initial state
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = "00";
    
    // Reset panel display
    workTittle.classList.add('active');
    breakTittle.classList.remove('active');
}
