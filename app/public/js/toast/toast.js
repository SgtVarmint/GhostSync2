function toast(message) {
    removeToastMessage();
    if(fullscreenEnabled) {
        toastMessage(message, 3, "#player", "25%", "15%", "0", "0");
    }
    else {
        toastMessage(message)
    }
}

function toastMessage(message, timeout = 3, elementToAppendTo = "body", margTop = "15%", margLeft = "13%", margRight = "13%", styleTop = "100") {
    var toastDiv = document.createElement("div");

    toastDiv.id = "toastDiv";
    toastDiv.style.marginTop = margTop;
    toastDiv.style.marginLeft = margLeft;
    toastDiv.style.marginRight = margRight;
    toastDiv.innerHTML = message;
    toastDiv.style.top = styleTop;

    document.querySelector(elementToAppendTo).appendChild(toastDiv);
    setTimeout(removeToastMessage, timeout * 1000.0);
}

function removeToastMessage() {
    if(document.getElementById("toastDiv") != null) document.getElementById("toastDiv").parentNode.removeChild(document.getElementById("toastDiv"));
}
