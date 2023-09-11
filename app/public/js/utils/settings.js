const settingsButton = () => 
{
	let settings = byID('settings');
	
	if (settings.style.display == "block")
	{
		closeMenu(settings);
	}
	else
	{
		openMenu(settings);	
	}
}

const enableBackgroundFade = () => 
{
	let backgroundFade = byID('backgroundFade');
	
	backgroundFade.className = 'fade_in';
	backgroundFade.style.display = 'block';
}

const disableBackgroundFade = () => 
{
	let backgroundFade = byID('backgroundFade');

	backgroundFade.className = "fade_out";
	setTimeout(function(){ 
			backgroundFade.style.display = "none";
			}, 200);
}