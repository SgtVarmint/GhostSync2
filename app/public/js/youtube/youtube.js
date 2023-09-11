const youtubeButton = () => {
    let youtubeMenu = byID("youtube");

    if (youtubeMenu.style.display === "block")
    {
        closeMenu(youtubeMenu);
    }
    else
    {
        openMenu(youtubeMenu);
        byID("youtubeInput").focus();
    }
}