const init = () => 
{
	byID("settingsButton").onclick = settingsButton;
	byID("browserButton").onclick = videoBrowserButton;
	byID("youtubeButton").onclick = youtubeButton;
}

const authenticate = () =>
{
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST","/components/authentication/authentication.php",false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.onreadystatechange = function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			if (this.responseText == "denied")
			{
				location.href = "/index.html";
				console.log("User does not have access to site");
			}
			else
			{
				console.log("Sucessfully Authenticated");
				let xhttp2 = new XMLHttpRequest();
				xhttp2.open("GET", "http://" + localStorage.getItem("auth") + document.location.href.split("http://")[1].split("/")[0] + "/Videos/AuthTouch.txt");
				xhttp2.send();
			}
		}
	}
	xhttp.send("accessCode=" + localStorage.getItem("access"));
}

const closeMenu = (element) => 
{
	disableBackgroundFade();
		setTimeout(function(){ 
			element.style.display = "none";
			enablePointerEventsInMenus();
			}, 200);
		element.className = "popupWindow_out";
		
		disablePointerEventsInMenus();
		resetNavButtons();
}

const openMenu = (element) => 
{
	let elementButton = byID(element.id+'Button');

	enableBackgroundFade();
	//removeToastMessage();
	setTimeout(function(){
		// document.getElementById("browser").style.display = "none";
		// document.getElementById("youtubeMenu").style.display = "none";
		enablePointerEventsInMenus();
	}, 200);
	//document.getElementById("browser").className = "popupWindow_out";
	//document.getElementById("youtubeMenu").className = "popupWindow_out";
	element.style.display = "block";
	element.className = "popupWindow_in";
	
	disablePointerEventsInMenus();
	resetNavButtons();
	elementButton.innerHTML = "Close";
	elementButton.style.color = "blue";
}

window.addEventListener('load', init);