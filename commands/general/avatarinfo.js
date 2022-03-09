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

    let utente = interaction.options.getUser("user")

    let embed = new Discord.MessageEmbed()
    .setTitle("Avatar")
    .setDescription("L'avatar di questo utente")
    .setImage(utente.user.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 512
    }))

    interaction.reply({ embeds: [embed] })

}}