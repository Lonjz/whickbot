const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    let embed = new Discord.MessageEmbed()
    .setURL("https://donatebot.io/checkout/769219615737512016")
    .setTitle("[Click] to donate!")
    .setDescription("Join discord server for perks \n Do: yo server, to join support server!")
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(message.author.avatarURL({ dynamic: true, size: 1024}))
    .setFooter("no needa dono but if u do ty");
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "donate",
    aliases: ["dono"]
}