const byID = (elementName) => { return document.getElementById(elementName); }

const getLocalItem = (keyName) => {
    return localStorage.getItem(keyName)
}

const changeTheme = () => {
    var root = document.querySelector(':root');

    var rootStyles = getComputedStyle(root);
    var mainColor = rootStyles.getPropertyValue('--primary');
    console.log("main color = ", mainColor);
    root.style.setProperty('--primary', '#3D315B');
}

const enablePointerEventsInMenus = () =>
{
	document.getElementById("browser").style.pointerEvents = "auto";
	document.getElementById("youtube").style.pointerEvents = "auto";
	document.getElementById("settings").style.pointerEvents = "auto";
}

const disablePointerEventsInMenus = () =>
{
	document.getElementById("browser").style.pointerEvents = "none";
	document.getElementById("youtube").style.pointerEvents = "none";
	document.getElementById("settings").style.pointerEvents = "none";
}

const resetNavButtons = () =>
{
    if (true)
    {
        document.getElementById("browserButton").innerHTML = "Video Browser";
        document.getElementById("browserButton").style.color = "black";
       
        document.getElementById("youtubeButton").innerHTML = "Youtube";
        document.getElementById("youtubeButton").style.color = "black";
       
        document.getElementById("settingsButton").innerHTML = "Settings";
        document.getElementById("settingsButton").style.color = "black";
    }
    // else
    // {
    //     document.getElementById("videoBrowserButton").innerHTML = "&#x2630;";
    //     document.getElementById("videoBrowserButton").style.color = "white";
       
    //     document.getElementById("youtubeButton").innerHTML = "&#x25b6;";
    //    document.getElementById("youtubeButton").style.color = "white";
       
    //     document.getElementById("settingsButton").innerHTML = "&#9881;";
    //     document.getElementById("settingsButton").style.color = "white";
    // }
}