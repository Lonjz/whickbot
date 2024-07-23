const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author
    const avatar = user.avatarURL({ dynamic: true, size: 1024});
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`${user.username}'s avatar`)
    .setURL(`${avatar}`)
    .setImage(avatar)
    .setTimestamp() 
    .setFooter(`Used by ${message.author.tag}`)
    message.channel.send(embed)
}

module.exports.help = {
    name: "avatar",
    aliases: ["av"]
}