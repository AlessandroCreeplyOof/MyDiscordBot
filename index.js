// INIZIALIZZA IL BOT
const Discord = require("discord.js")
global.client = new Discord.Client({
    intents: 32767
});

client.login("OTM3MzQ1MTk3MDYxMzEyNTIz.YfaYvg.ALjAeWYBr4eOvS4fuLyfnUR0xuM")

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync("./commands");
for(const folder of commandsFolder){
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for(const file of commandFiles){
        const command = require(`./commands/${folder}/${file}`)
        client.commands.set(command.name, command);
    }
}


