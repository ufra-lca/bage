import { Socket } from 'phoenix'

export function connectSocket() {
    const ROOT_SOCKET = '10.11.81.17:4000';
    socket = new Socket(`${ROOT_SOCKET}`, {});
    let channel = socket.channel("room:lobby", {})
    channel.on("bage_update", (payload) => {
        console.log(payload)
    })
    channel.join()
        .receive("Ok", resp => { console.log("Conectou", resp) })
        .receive("Error", resp => { console.log("Não Conectou", resp) })
}