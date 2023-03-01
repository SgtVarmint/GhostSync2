//Runs at the end of this file
function initControls()
{
    let playButton = document.getElementById("play_button");
    let fullscreenButton = document.getElementById("fullscreen_button");
    let skipButton = document.getElementById("skip_button");

    playButton.innerHTML = playIcon;
    fullscreenButton.innerHTML = fullscreenIcon;
    skipButton.innerHTML = skipIcon;

    playButton.onclick = playButtonClicked();
}

function playButtonClicked()
{
    let mediaElement = null;

    alert(PLAYER_SOURCES[Local]);
    
    if (currentVideoSource == PLAYER_SOURCES[Local])
    {

    }
}

initControls();