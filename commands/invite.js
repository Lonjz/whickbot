const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Invite me! - Click")
    .setAuthor("Bot")
    .setColor("RANDOM")
    .setURL("https://discord.com/oauth2/authorize?client_id=734097442504704032&scope=bot&permissions=8")
    .setFooter("e")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "invite",
    aliases: []
}