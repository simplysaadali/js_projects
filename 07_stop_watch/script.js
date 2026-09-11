const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}


function stop() {
if (isRunning) {
    clearInterval(timer);
    elapsedTime=Date.now()-startTime;
    isRunning=false;
    
}
}

function reset() {
clearInterval( timer );
 startTime = 0;
 elapsedTime = 0;
 isRunning = false;
 display.textContent="00:00:00:00";

}
function update() {

    // 1. Get current timestamp in milliseconds

    const currentTime = Date.now();

    // 2. Calculate total time passed since the stopwatch started

    elapsedTime = currentTime - startTime;

    // 3. Convert total milliseconds into time components:
    // Hours: divide total ms by ms per hour

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    // Minutes: divide total ms by ms per minute (1000ms * 60s), 
    // then use % 60 to reset every 60 minutes

    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    // Seconds: divide total ms by 1000 to get total seconds,
    // then use % 60 to reset every 60 seconds

    let seconds = Math.floor(elapsedTime / 1000 % 60);

    // Milliseconds: get remainder after 1 second (% 1000), 
    // then divide by 10 to display 2 digits instead of 3 (0-99 range)
    
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSeconds = String(milliSeconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`
}