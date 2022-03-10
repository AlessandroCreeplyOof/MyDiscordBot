
const Discord = require("discord.js")
global.client = new Discord.Client({ partials: [`MESSAGE`, `CHANNEL`, `REACTION`],
    intents: 32767
});

client.login("OTM3MzQ1MTk3MDYxMzEyNTIz.YfaYvg.ALjAeWYBr4eOvS4fuLyfnUR0xuM")

client.on('ready', () => {
    client.user.setActivity('/help', { type: 'WATCHING' }); 
})

const fs = require("fs")
client.commands = new Discord.Collection()

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("ready", () => {
    client.guilds.cache.forEach(guild => {
        client.commands.forEach(command => {
            guild.commands.create(command.data)
        })
    })
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)
    if (!command) return

    command.execute(interaction)
})

client.on("ready", () => {
    console.log("--------------------");
    console.log("📢 Bot Loaded");
    console.log("--------------------");
})

client.on("messageCreate", message => {
    if(message.content.startsWith("!")) return message.reply("Hey! Il server si è convertito agli slash commands! Provali ora!")
})

client.on("ready", message => {

    let onlinebot = new Discord.MessageEmbed()
    .setTitle("🟢 Bot ONLINE")
    .setDescription("⏰ Ping", `${client.ws.ping}ms`)
    .setColor("GREEN")

    message.channels.cache("951145777131044884").send({embeds: [onlinebot]})
})


