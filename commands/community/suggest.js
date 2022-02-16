const Discord = require("discord.js")

client.on("messageCreate", message => {
    if (message.content.startsWith("!suggest")) {
        var contenuto = args.join(" ")

        if (!contenuto) {
            return botCommandMessage(message, "Error", "Inserire un suggerimento", "Scrivi il testo della tua suggestion", property)
        }

        if (contenuto.length > 500) {
            return botCommandMessage(message, "Error", "Suggerimento troppo lungo", "Scrivi una suggestion non più lunga di 500 caratteri", property)
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("💡 Nuovo suggerimento 💡")
            .setColor("#fcba03")
            .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
            .setDescription("Attendi che lo staff approvi il tuo nuovo suggerimento")
            .addField(":bookmark_tabs: Testo:", contenuto)

        message.channel.send({ embeds: [embed] })

        var embed = new Discord.MessageEmbed()
            .setTitle("💡 Nuovo Suggerimento 💡")
            .setColor("#fcba03")
            .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
            .addField(":bust_in_silhouette: User", `${message.author.username} (ID: ${message.author.id})`)
            .addField("Status", "Pending")
            .addField("Text", contenuto)

        var button1 = new Discord.MessageButton()
            .setStyle('DANGER')
            .setLabel('Rifiuta')
            .setCustomId(`rifiutaSuggestion`)
        var button2 = new Discord.MessageButton()
            .setStyle('SUCCESS')
            .setLabel('Approva')
            .setCustomId(`approvaSuggestion`)

        var row = new Discord.MessageActionRow()
            .addComponents(button1)
            .addComponents(button2)

        canale.send({ embeds: [embed], components: [row] })

        if (isMaintenance(user.id)) return

        if (user.bot) return

        if (messageReaction.message.partial) await messageReaction.message.fetch();

        if (messageReaction.message.channel.id == "934745362814623814") {
            try {
                var userUp = (await messageReaction.message.reactions.cache.find(x => x._emoji.name == "😍").users.fetch()).map(user => user.id)
                var userDown = (await messageReaction.message.reactions.cache.find(x => x._emoji.name == "💩").users.fetch()).map(user => user.id)

                if (!userUp) return
                if (!userDown) return

                if (messageReaction._emoji.name == "😍") {
                    if (userDown.includes(user.id)) {
                        messageReaction.users.remove(user);
                        return
                    }
                }

                if (messageReaction._emoji.name == "💩") {
                    if (userUp.includes(user.id)) {
                        messageReaction.users.remove(user);
                        return
                    }
                }

                var embed = new Discord.MessageEmbed()
                    .setTitle(messageReaction.message.embeds[0].title)
                    .setDescription(messageReaction.message.embeds[0].description)
                    .setThumbnail(messageReaction.message.embeds[0].thumbnail.url)

                if (userUp.length != 0 || userDown.length != 0) {
                    var upvotes = 100 * userUp.length / (userUp.length + userDown.length)
                    if (upvotes % 1 != 0) {
                        upvotes = upvotes.toFixed(2)

                    }
                    var downvotes = 100 * userDown.length / (userUp.length + userDown.length)
                    if (downvotes % 1 != 0) {
                        downvotes = downvotes.toFixed(2)
                    }
                }
                else {
                    var upvotes = 0;
                    var downvotes = 0;
                }

                embed.addField(":first_place: Votes", `
Opinion: **${(userUp.length - userDown.length) > 0 ? "+" : ""}${userUp.length - userDown.length}**
Upvotes: **${userUp.length}** - ${upvotes}%
Downvotes: **${userDown.length}** - ${downvotes}%
`)

                messageReaction.message.edit({ embeds: [embed] })
            } catch {

            }

        }}
    })
