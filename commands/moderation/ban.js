const Discord = require("discord.js")

client.on("messageCreate", message => {
  if (message.content.startsWith("!ban")) {
      var utente = message.mentions.members.first();
      if (!message.member.permissions.has('BAN_MEMBERS')) {
          return message.channel.send('Non hai il permesso');
      }
      if (!utente) {
          return message.channel.send('Non hai menzionato nessun utente');
      }
      if (!utente.bannable) {
          return message.channel.send('Io non ho il permesso');
      }
      utente.ban()
          .then(() => {
              var embed = new Discord.MessageEmbed()
                  .setTitle(`${utente.user.username} bannato`)
                  .setDescription(`Utente bannato da ${message.author.toString()}`)
                  .setThumbnail(`immagini/ban.png`)

              message.channel.send({ embeds: [embed] })
          })
  }
})