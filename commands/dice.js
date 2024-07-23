const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("The dice fell on: "+ Math.floor(Math.random() * 6))
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`${message.author.tag}`)
        
        message.channel.send(embed);
}

module.exports.help = {
    name: "dice",
    aliases: ["diceroll", "roll"]
}