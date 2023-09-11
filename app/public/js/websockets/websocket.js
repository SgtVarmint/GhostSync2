let socket = new WebSocket("ws://10.0.0.236:5050/v1/ws")

const send = (payload) => {
    socket.send(payload)
}

socket.onopen = () => {
    console.log("Successful connection to websocket server...")

    videoLoc = "/Videos/Movies/Rango.mp4";

    byID("videoSource").src = videoLoc;
    byID("video").load();

    userConnectObj = {
        'event': 'userConnect',
        'lobby_name': btoa(getLocalItem('lobbyName')),
        'data': [getLocalItem('userName')]
    };

    send(JSON.stringify(userConnectObj))
}

socket.onmessage = (event) => {
    eventObj = JSON.parse(event.data)
    switch(eventObj.Event) {
        case "playVideo":
            byID("video").play();
            break
        case "pauseVideo":
            byID("video").pause();
            break
        case "seek":
            //TODO: Implement seek function
            break
        case "skip":
            //TODO: Implement skip function
            break
        case "userConnect":
            updateUserList(eventObj.Users)
            break
        case "userDisconnect":
            //TODO: Implement userDisconnect
            break
    }
}

socket.onclose = () => {
    console.log("Connection closed")
    send("userDisconnect;" + btoa(localStorage.getItem("lobbyName")))
}