let socket = new WebSocket("ws://10.0.0.235:5050/v1/ws")

const send = (eventToTrigger) => {
    socket.send(eventToTrigger)
}

socket.onopen = () => {
    console.log("Successful connection to websocket server...")
    videoLoc = "/Videos/Movies/Rango.mp4";

    byID("videoSource").src = videoLoc;
    byID("video").load();
    socket.send("User connected")
}

socket.onmessage = (event) => {
    switch(event.data) {
        case "playVideo":
            byID("video").play();
            return
        case "pauseVideo":
            byID("video").pause();
    }
}

socket.onclose = () => {
    console.log("Connection closed")
}