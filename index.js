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
.setTitle("📥 #BOTLOG")
.setDescription(`🟢 Il bot è andato online!`)
.setColor("GREEN")
.setTimestamp()

const offline = new Discord.MessageEmbed()
.setTitle("📤 #BOTLOG")
.setDescription(`🔴 Il bot è andato offline!`)
.setColor("RED")
.setTimestamp()

client.on('ready', () => {
    console.log("✅Online | Bot On!")
    client.channels.cache.get("934182975267041321").send({embeds: [online]})
    })

    client.on("guildMemberAdd", member => {
        if (member.user.bot) return
        var embed = new Discord.MessageEmbed()
            .setTitle("Benvenuto!")
            .setDescription(`Ciao ${member.toString()}, benvenuto in ${member.guild.name}. Sei il **${member.guild.memberCount}° Membro**`)
    
        member.send({embeds: [embed]}); 
    })

    client.on("GuildMember", member => {
        if (member.user.bot) return
        var embed = new Discord.MessageEmbed()
            .setTitle("Benvenuto!")
            .setDescription(`Ciao ${member.toString()}, benvenuto in ${member.guild.name}. Sei il **${member.guild.memberCount}° Membro**`)
    
        member.send({embeds: [embed]}); 
    })
