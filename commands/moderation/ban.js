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

                        const embed = new Discord.MessageEmbed()
                            .setTitle(`#BAN ${utente.user.username}`)
                            .setDescription(`:brain: Member: ${utente.user.username} \n :bust_in_silhouette: Moderator: ${message.author.toString()}`)
                            .setColor("PURPLE")
                            .setThumbnail("https://media.discordapp.net/attachments/941101779297378314/944975826779271249/bancanvas-removebg-preview_1.png")


                        const logban = new Discord.MessageEmbed()
                            .setTitle(`:no_entry: BAN :no_entry:`)
                            .addField(`:brain: Member: ${utente.user.username}`, false)
                            .addField(`:bust_in_silhouette: Executor: ${message.author.toString()}`, false)
                            .setColor("#8227cc")
        
                        message.channel.send({ embeds: [embed] })
                        client.channels.cache.get("944904295034290236").send({embeds: [logban]}); 
                    })
            }
})
    
