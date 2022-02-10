// INIZIALIZZA IL BOT
const Discord = require("discord.js")
global.client = new Discord.Client({
    intents: 32767
});

client.login("OTM3MzQ1MTk3MDYxMzEyNTIz.YfaYvg.ALjAeWYBr4eOvS4fuLyfnUR0xuM")

const fs = require("fs");

global.prefix = "!"

//COMMANDS
client.commands = new Discord.Collection();
const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`);
    for (const file of commandsFiles) {
        if (file.endsWith(".js")) {
            const command = require(`./commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
        else {
            const commandsFiles2 = fs.readdirSync(`./commands/${folder}/${file}`)
            for (const file2 of commandsFiles2) {
                const command = require(`./commands/${folder}/${file}/${file2}`);
                client.commands.set(command.name, command);
            }
        }
    }
}
//EVENTS
const eventsFolders = fs.readdirSync('./events');
for (const folder of eventsFolders) {
    const eventsFiles = fs.readdirSync(`./events/${folder}`)

    for (const file of eventsFiles) {
        if (file.endsWith(".js")) {
            const event = require(`./events/${folder}/${file}`);
            client.on(event.name, (...args) => event.execute(...args));
        }
        else {
            const eventsFiles2 = fs.readdirSync(`./events/${folder}/${file}`)
            for (const file2 of eventsFiles2) {
                const event = require(`./events/${folder}/${file}/${file2}`);
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
}
//FUNCTIONS
const functionFiles = fs.readdirSync('./functions').filter(file => file.endsWith('.js'));
for (const file of functionFiles) {
    require(`./functions/${file}`);
}

//LOG BENVENUTO E ADDIO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("#WELCOME")
        .setDescription(`${member.user.tag} è entrato nel server, Siamo a **${member.guild.memberCount}° membri in totale**`)
        .setColor("YELLOW")
        .setTimestamp("")

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})

client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("#GOODBYE")
        .setDescription(`${member.user.tag} è uscito dal server`)
        .setColor("RED")
        .setTimestamp("")

    client.channels.cache.get("937720962730819614").send({embeds: [embed]}); 
})

const online = new Discord.MessageEmbed()
.setTitle("✅ #BOTLOG")
.setDescription(`🟢 BOT ONLINE`)
.setColor("GREEN")
.setTimestamp("")

client.on('ready', () => {
    console.log("✅Online | Bot On!")
    client.channels.cache.get("934182975267041321").send({embeds: [online]})
    })
