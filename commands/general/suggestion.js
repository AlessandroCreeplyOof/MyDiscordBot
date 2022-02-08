const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest ")) {
        var args = message.content.split(/\s+/);
        var bug;
        testo = args.slice(1).join(" ");
        if (!bug) {
          var errore = new MessageEmbed()
          .setTitle("Errore")
          .setColor("RED")
          .setDescription("Inserisci Un Suggerimento prima di inviare!")
            return message.channel.send({embeds: [errore]});
        }
        message.delete()
  
  
  
        var sium = new MessageEmbed()
        .setTitle("Successo")
        .setDescription(`📩 Hai inviato con successo il tuo suggerimento! \r📑Bug:\r ` + "**"+  bug + "**")
        .setColor("ACQUA")
        message.channel.send({embeds: [sium]})
  
  
  
        var newsuggest = new MessageEmbed()
        .setTitle("New Bug")
        .setColor("GREEN")
        .setDescription(`<@789100941218938910> **SUGGEST**\r**👤Utente:**\r${message.author.toString()}\r**📑Suggerimento:**\r ` + "**"+  bug + "**")
  
     
  
  
        client.channels.cache.get('939895753290154015').send({embeds: [newsuggest]}); 
    }
  })