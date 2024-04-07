const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1224277297184374794/",
    token: "PeBvs4pYEB0dY2Aq_2K_yUdlz1TZ-t-GJi1qwwjn2ovh7CKb1HfwIMHNAVNwb_vZL2lE",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
}

 