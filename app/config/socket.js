import { Socket } from 'phoenix'

export function connectSocket(onUpdate) {
    const ROOT_SOCKET = 'http://b6bd7dce.ngrok.io/socket';
    socket = new Socket(`${ROOT_SOCKET}`, {});
    socket.connect()

    let channel = socket.channel("room:lobby", {})
    channel.on("bage_update", (payload) => {

        onUpdate(
            { ...payload, latitude: parseFloat(payload.latitude), longitude: parseFloat(payload.longitude) }
        )
    })
    channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) })
}