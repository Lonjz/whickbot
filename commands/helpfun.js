const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(":tada: Fun Commands")
    .setColor("RANDOM")
    .addField('`meme`, `rps`, `quiz`, `8ball`, `insult`, `advice`, `mama`, `dice`, `pp`, `howdumb`, `joke`, `todayinhistory`', 'Some commands have aliases!', true)
    .setFooter("Use the prefix 'yo' before every command! - yo cmd <bot_command>")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "helpfun",
    aliases: []
}