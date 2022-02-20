const Discord = require("discord.js")

const nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription(`Non hai il permesso per eseguire questa azione!`)
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944975611208794162/permsscanvas-removebg-preview.png`)

const nonmenzione = new Discord.MessageEmbed()
.setTitle(`Error 404`)
.setDescription("Non hai menzionato nessun utente da bannare! \n \n **Syntax:** `!ban [utente]`")
.setColor(`ORANGE`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/944976235568701491/mentionscanvas-removebg-preview.png`)

client.on("messageCreate", message => {
    if (message.content.startsWith("!ban")) {
                const utente = message.mentions.members.first();
                if (!message.member.permissions.has('BAN_MEMBERS')) {
                    return message.channel.send({embeds : [nonpermesso1]});
                }
                if (!utente) {
                    return message.channel.send({embeds : [nonmenzione]});
                }
                if (!utente.bannable) {
                    return message.channel.send({embeds : [nonpermesso1]});
                }
                utente.ban()
                    .then(() => {

                        const logban = new Discord.MessageEmbed()
                            .setTitle(`#BAN ${utente.user.username}`)
                            .setDescription(`**Nuovo ban** \n ${utente.user.username} è stato bannato dal server \n \n 🌐 Moderatore: ${message.author.toString()} \n \n 💬 Motivo: Non disponibile`)
                            .setColor("RED")
                            .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975826779271249/bancanvas-removebg-preview_1.png")


                        const embed = new Discord.MessageEmbed()
                            .setAuthor(`#BAN ${utente.user.username}`)
                            .setDescription(`Reason: \n Nessun Motivo \n Moderator: ${message.author.toString()}`)
                            .setFooter("ID Utente:", utente.user.user)
                            .setColor("ORANGE")
                            .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975826779271249/bancanvas-removebg-preview_1.png")
        
                        message.channel.send({ embeds: [embed] })
                        client.channels.cache.get("944904295034290236").send({embeds: [logban]}); 
                    })
            }
})
    
