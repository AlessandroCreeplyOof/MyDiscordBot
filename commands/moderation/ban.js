const Discord = require("discord.js")

var nontrovato = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Ooops, non sono riuscito a trovare questo utente!`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonpermesso1 = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai il permesso per bannare questo utente!`)
.setColor(`RED`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

var nonmenzione = new Discord.MessageEmbed()
.setTitle(`Errore`)
.setDescription(`Non hai menzionato nessuno da bannare!`)
.setColor(`GREY`)
.setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/942011608996147230/giastanza-removebg-preview_1.png`)

client.on("messageCreate", message => {
  if (message.content.startsWith("!ban")) {
      var utente = message.mentions.members.first();
    }
      if (!message.member.permissions.has('BAN_MEMBERS')) {
          return message.channel.send({ embeds: [nonpermesso1] });
      }
      if (!utente) {
          return message.channel.send({ embeds: [nonmenzione] });
      }
      if (!utente.bannable) {
          return message.channel.send({embeds: [nonpermesso1] });
      }
      utente.ban()
          .then(() => {
              var embed = new Discord.MessageEmbed()
                  .setTitle(`#BAN ${utente.user.username}`)
                  .setDescription(`L'utente è stato bannato da: ${message.author.toString()}`)
                  .addField(`Motivo: null`)
                  .setColor(`RED`)
                  .setThumbnail(`https://media.discordapp.net/attachments/941101779297378314/941101829046042755/ban.png`)

              message.channel.send({ embeds: [embed] })
          })
  }
)