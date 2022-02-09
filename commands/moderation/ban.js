const Discord = require("discord.js")

var noperms = new Discord.MessageEmbed()
.setTitle(`Non hai il permesso!`)
.setDescription(`Non è stato rilevato il permesso che ti permette di eseguire la seguente azione: **BAN**`)
.setColor(`RED`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829847130122/noperms.png`)

var menzione = new Discord.MessageEmbed()
.setTitle(`Errore di sintassi`)
.setDescription(`Non hai menzionato nessun utente da bannare!`)
.setColor(`YELLOW`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101830543396864/sintassi2.png`)

client.on("messageCreate", message => {
  if (message.content.startsWith("!ban")) {
      var utente = message.mentions.members.first();
      if (!message.member.permissions.has('BAN_MEMBERS')) {
          return message.channel.send({ embeds: [noperms] });
      }
      if (!utente) {
          return message.channel.send({ embeds: [menzione] });
      }
      if (!utente.bannable) {
          return message.channel.send('Io non ho il permesso');
      }
      utente.ban()
          .then(() => {
              var embed = new Discord.MessageEmbed()
                  .setTitle(`#BAN ${utente.user.username}`)
                  .setDescription(`L'utente è stato bannato da: ${message.author.toString()}`)
                  .setColor(`RED`)
                  .setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829046042755/ban.png`)

              message.channel.send({ embeds: [embed] })
          })
  }
})