const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(":moneybag: Economy Commands")
    .setColor("RANDOM")
    .addField('`bal`, `gamble`, `deposit`, `withdraw`, `beg`, `passive`, `rob`, `daily`, `buy`, `shop`, `inv`, `give`, `setcolor`, `update`' ,'IN BETA RN', 'Some commands have aliases!', true)
    .setFooter("Use the prefix 'yo' before every command! - yo cmd <bot_command>")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "helpeco",
    aliases: ["helpeconomy"]
}
