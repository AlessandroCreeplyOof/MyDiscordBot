// INIZIALIZZA IL BOT
const Discord = require("discord.js")
global.client = new Discord.Client({
    intents: 32767
});

client.login("OTM3MzQ1MTk3MDYxMzEyNTIz.YfaYvg.ALjAeWYBr4eOvS4fuLyfnUR0xuM")

require('events').EventEmitter.prototype._maxListeners = 1000;

const fs = require("fs");
global.ytch = require('yt-channel-info');

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on("message", message => {
    const prefix = "!";

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

    var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

    if (comando.onlyStaff) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("Non hai il permesso di eseguire questo comando")
            return
        }
    }

    comando.execute(message, args);
})

client.on("messageCreate", async (message, guild) => {
    client.channels.fetch()
    if(message.channel.type == "dm") {
        const dmEmbed = new Discord.MessageEmbed()
        .setTitle(`New DM`)
        .setColor(`RANDOM`)
        .setTimestamp()
        .setDescription(`**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**At:** ${new Date()}\n\n**Content** \`\`\`${message.content}\`\`\``)

        client.channels.cache.get("944915188421910578").send({embeds: [dmEmbed]})
    }
})


