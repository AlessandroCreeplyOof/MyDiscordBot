const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Banna membri",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Non hai il permesso!!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Non ho il permesso!')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Perfavore specifica un utente');

        if(!member) return message.channel.send('Non riesco a trovare questo utente :/');
        if(!member.bannable) return message.channel.send('Non posso bannarlo!');

        if(member.id === message.author.id) return message.channel.send('Bruh, non posso bannarmi da solo :(');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.ban(`${reason}`).catch(err => { 
          message.channel.send('Scrivi una ragione')
            console.log(err)
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}