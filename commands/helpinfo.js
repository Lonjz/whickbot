const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(":information_source: Informational Commands")
    .setColor("RANDOM")
    .addField('`itemshop`, `cmd`, `anime`, `manga`', 'Some commands have aliases!', true)
    .setFooter("Use the prefix 'yo' before every command! - yo cmd <bot_command>")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "helpinfo",
    aliases: ["helpinf"]
}