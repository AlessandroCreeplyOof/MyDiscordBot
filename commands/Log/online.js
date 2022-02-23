const Discord = require("discord.js")

var currentdate = new Date(); 
var datetime = "Date Time: " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

const online = new Discord.MessageEmbed()
.setTitle("Bot ONLINE")
.setDescription("⏰ Time \n ", datetime)
.setColor("DARK_GREEN")

const offline = new Discord.MessageEmbed()
.setTitle("📤 #BOTLOG")
.setDescription(`🔴 Il bot è andato offline!`)
.setColor("RED")
.setTimestamp()

client.on('ready', () => {
    console.log("✅Online | Bot On!")
    client.channels.cache.get("934182975267041321").send({embeds: [online]})
    })