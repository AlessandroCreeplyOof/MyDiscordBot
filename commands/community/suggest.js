const Discord = require(`discord.js`);

module.exports = {
    name: `suggest`,
    description: `Fai un suggerimento`,
    execute(client, messages, args) {
        const canaleSuggerimenti = message.guild.channels.cache.get("934745362814623814");

        if (!canaleSuggerimenti) return message.reply(`Canale non trovato!`);

        const embedSuggerimento = new Discord.MessageEmbed()
        .setAuthor("Suggerimento di" + message.author.tag, message.author.displayAvatarURL)
        .setDescription(args.join(` `))
        .setTimestamp()
        .setColor("BLUE")

        canaleSuggerimenti.send({ embeds: [embedSuggerimento]} ).then(msgEmbed => {
            msgEmbed.react(`👍`);
            msgEmbed.react(`👎`);

            message.channel.send(`Il tuo suggerimento è stato inviato!`).then(msgConferma => {
                message.delete({ timeout: 5000 });
            })
        })
    }
}