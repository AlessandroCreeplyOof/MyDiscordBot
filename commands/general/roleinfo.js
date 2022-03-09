module.exports = {
    name: "roleinfo",
    data: {
        name: "roleinfo",
        description: "Visualizza le statistiche di un ruolo",
        options: [
            {
                name: "ruolo",
                description: "L'utente di cui vuoi l'avatar",
                type: "ROLE",
                required: true
            }
        ]
    },

execute(interaction) {

    let role = interaction.options.getRole("ruolo")

    let embed = new Discord.MessageEmbed()
        .setTitle(role.name)
        .setDescription("Tutte le statistiche di questo ruolo")
        .addField("Role ID", role.id, true)
        .addField("Color", role.hexColor, true)
        .addField("Role created", role.createdAt.toDateString(), true)

    interaction.reply({ embeds: [embed] })

}}