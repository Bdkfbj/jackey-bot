const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `   Silent  `,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `  Shi_55  `,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `  Jacky army `,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 