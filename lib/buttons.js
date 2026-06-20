export async function sendButtons(sock, jid, options) {

    const {
        text,
        footer = "Zayra Library",
        buttons = []
    } = options;

    await sock.sendMessage(jid, {
        text: text,
        footer: footer,
        buttons: buttons.map((btn) => ({
            buttonId: btn.id,
            buttonText: { displayText: btn.text },
            type: 1
        })),
        headerType: 1
    });

}
