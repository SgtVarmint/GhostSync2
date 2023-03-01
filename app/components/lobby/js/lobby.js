//include() method will add the resource to the page as <script> or <link> tag
include("/components/icons/icons.js");
include("/components/utils/js/utils.js");
include("/components/players/controls.js");
include("/components/players/players.js");
include("/lobby.css");

const init = () => 
{
	
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

window.addEventListener('load', init);