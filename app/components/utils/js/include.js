function include(filePath) {

    var fileExtension = filePath.split(".")[1];
    var resource = null;

    if (fileExtension == "js")
    {
        resource = document.createElement("script");
        resource.type = "text/javascript";
        resource.src = filePath;
    }
    else if (fileExtension == "css")
    {
        resource = document.createElement("link");
        resource.rel = "stylesheet";
        resource.href = filePath;
    }

    document.head.appendChild(resource);
}

