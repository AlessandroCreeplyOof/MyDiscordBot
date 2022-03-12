const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    data: {
        name: "avatar",
        description: "Visualizza l'avatar di un utente",
        options: [
            {
                name: "user",
                description: "L'utente di cui vuoi l'avatar",
                type: "USER",
                required: true
            }
        ]
    },
    
    execute(interaction) {

        var avataruser = interaction.options.getUser("user")
        let utente = interaction.guild.members.cache.get(avataruser.id)

        let embed = new Discord.MessageEmbed()
        .setTitle(utente.user.tag)
        .setDescription("L'avatar di questo utente")
        .setImage(utente.user.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 512
        }))

        interaction.reply({ embeds: [embed] })
    }
}