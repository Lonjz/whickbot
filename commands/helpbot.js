const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(":robot: About-Bot Commands")
    .setColor("RANDOM")
    .addField('`lon`, `invite`, `server`, `stats`, `donate`', 'Some commands have aliases!', true)
    .setFooter("Use the prefix 'yo' before every command! - yo cmd <bot_command>")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "helpbot",
    aliases: ["helpabout", "helpabt"]
}   