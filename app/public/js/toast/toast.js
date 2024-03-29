function toast(message)
{
	removeToastMessage();
	if (fullscreenEnabled)
	{
		toastMessage(message, 3, "#player", "25%", "15%", "0", "0");
	}
	else
	{
		toastMessage(message)
	}
}

function toastMessage(message, timeout = 3, elementToAppendTo = "body", margTop = "15%", margLeft = "13%", margRight = "13%", styleTop = "100")
{
	var toastDiv = document.createElement("div");
	if (true)
	{
		toastDiv.id = "toastDiv";
		toastDiv.style.position = "fixed";
		toastDiv.style.width = "74%";
		toastDiv.style.background = "rgba(79, 79, 79, 0.75)";
		toastDiv.style.textAlign = "center";
		toastDiv.style.marginTop = margTop;
		toastDiv.style.marginLeft = margLeft;
		toastDiv.style.marginRight = margRight;
		toastDiv.style.padding = "20px";
		toastDiv.style.borderRadius = "10px";
		toastDiv.innerHTML = message;
		toastDiv.style.color = "white";
		toastDiv.style.top = styleTop;
		toastDiv.style.zIndex = "1000";
		toastDiv.style.border = "1px solid white";
		toastDiv.style.pointerEvents = "none";
	}
	
	document.querySelector(elementToAppendTo).appendChild(toastDiv);
	setTimeout(removeToastMessage, timeout * 1000.0);
}

function removeToastMessage()
{
	if (document.getElementById("toastDiv") != null)
		document.getElementById("toastDiv").parentNode.removeChild(document.getElementById("toastDiv"));
}