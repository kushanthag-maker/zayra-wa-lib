export async function sendText(sock, jid, text) {
    return await sock.sendMessage(jid, {
        text: text
    });
}
