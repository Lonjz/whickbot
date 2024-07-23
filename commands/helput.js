const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(":jigsaw: Utility Commands")
    .setColor("RANDOM")
    .addField('`avatar`, `say`, `embed`, `ping`, `whois`, `create`, `channel`', 'Some commands have aliases!', true)
    .setFooter("Use the prefix 'yo' before every command! - yo cmd <bot_command>")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "helput",
    aliases: ["helputility"]
}