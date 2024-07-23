const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Join support server! - Click")
    .setAuthor("Bot")
    .setColor("RANDOM")
    .setURL("https://discord.gg/8aGapGSsPw")
    .setFooter("e")
    .setTimestamp()

    message.channel.send(embed)
    message.channel.send("If that doesnt work - discord.gg/8aGapGSsPw")
}

module.exports.help = {
    name: "server",
    aliases: ["support"]
}