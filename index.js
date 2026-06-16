function disableStart() {
    document.getElementById("startBtn").disabled = true;
}

function enableStart() {
    document.getElementById("startBtn").disabled = false;
}

function disableStop() {
    document.getElementById("stopBtn").disabled = true;
}

function enableStop() {
    document.getElementById("stopBtn").disabled = false;
}
function moveMeme() {

    const meme = document.getElementById("memeimage");

    
    moveInterval = setInterval((500) => {

        let x = Math.random() * 500;
        let y = Math.random() * 300;


        meme.style.left = x + "px";
        meme.style.top = y + "px";

    }, 500);
}

function stopMeme() {
    clearInterval(moveInterval
function startClicked() {

    //Disable start button
    disableStart();

    // Enable Stop button
    enableStop();

    // Start moving the meme
    moveMeme();
}

function stopClicked() {

    // Disable Stop button
    disableStop();

    // Enable Start button
    enableStart();

    // Stop the meme movement
    stopMeme();
}