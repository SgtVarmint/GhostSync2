const videoBrowserButton = () => {
    let browser = byID("browser");

    if(browser.style.display === "block")
    {
        closeMenu(browser)
    }
    else
    {
        // TODO: Figure out what this does and implement
        // if(!byID("thumbnail")) 
        //     serveMissingVideoInfo();
        
        openMenu(browser);
    }
}

const getDirectoryInfo = () => {
    
}

const updateVideoBrowser = () => {
    let PROGRESS_UNWATCHED = "white";

    let PROGRESS_FINISHED = "#b8b8b8";
}