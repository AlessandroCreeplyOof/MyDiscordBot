const Discord = require("discord.js")
 
module.exports = {
 nombre: 'clear',
 alias: ['clearmessages', 'limpiar'],
 descripcion: 'Elimina mensajes',
 uso: 'clear <cantidad>\nclearmessages <cantidad>\nlimpiar <cantidad>',
 run: async (client, message, args) => {
 
     if(!message.member.hasPermission("ADMINISTRATOR")){
const embed = new Discord.RichEmbed()
  .setTitle('ERROR: Permessi insufficenti!')
  .setDescription("Non hai il permesso!")
  .setFooter(client.user.tag, client.user.DisplayAvatarURL)
  .setColor("RED")
  .setTimestamp();
 message.channel.send(embed)
}
 
   if(!args[0]){
   const embed2 = new Discord.RichEmbed()
   .setTitle('ERROR: Numero invalido!')
   .setDescription('Numero invalido!')
   .setTimestamp();     
   message.channel.send(embed2)
}
 
   const number = args[0]
  if(number >= 100 || number <= 0){
       const embed2 = new Discord.RichEmbed()
   .setTitle('ERROR: Numero Invalido')
   .setDescription('Il numero che hai scritto è invalido!')
   .setTimestamp();     
   message.channel.send(embed2)    
   }
 
  const number2 = parseInt(number)
 
     if(isNaN(number2)){
  const embed3 = new Discord.RichEmbed()
  .setTitle("ERROR: Questo non è un numero!")
  .setDescription("Hai scritto qualcosa che non è un numero!")
  .setTimestamp();
 
  message.channel.send(embed3)
}
 
 
  message.channel.bulkDelete(number2)
    .then(m => {
      const embed4 = new Discord.RichEmbed()
     .setTitle(`Ho eliminato con successo **${number}** messaggi da questa chat!`)
     .setTimestamp();
 
    setTimeout(() => {
     message.channel.send(embed4)
}, 500)
    }).catch(error => {
      message.channel.send('Errore!')
  })
 
}
}