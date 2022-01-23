module.exports = {
    name: "test",
    description: "Comando di Test",
    execute(message, args) {
        message.channel.send("TEST");
    }
}