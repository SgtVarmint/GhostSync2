const settingsButton = () => 
{
	let settings = byID('settings')
	
	if (settings.style.display == "block")
	{
		disableBackgroundFade();
		setTimeout(function(){ 
			settings.style.display = "none";
			enablePointerEventsInMenus();
			}, 200);
		settings.className = "popupWindow_out";
		
		//disablePointerEventsInMenus();
		resetNavButtons();
	}
	else
	{
		enableBackgroundFade();
		removeToastMessage();
		setTimeout(function(){
			document.getElementById("browser").style.display = "none";
			document.getElementById("youtubeMenu").style.display = "none";
			enablePointerEventsInMenus();
		}, 200);
		document.getElementById("browser").className = "popupWindow_out";
		document.getElementById("youtubeMenu").className = "popupWindow_out";
		settings.style.display = "block";
		settings.className = "popupWindow_in";
		
		//disablePointerEventsInMenus();
		//resetNavButtons();
		document.getElementById("settingsButton").innerHTML = "Close";
		document.getElementById("settingsButton").style.color = "blue";
	}
}

const enableBackgroundFade = () => {
	let backgroundFade = byID('backgroundFade');
	
	backgroundFade.className = 'fade_in';
	backgroundFade.style.display = 'block';
}

const disableBackgroundFade = () => {
	let backgroundFade = byID('backgroundFade');

	backgroundFade.className = "fade_out";
	setTimeout(function(){ 
			backgroundFade.style.display = "none";
			}, 200);
}