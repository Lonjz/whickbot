const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;
    var dumb = Math.floor(Math.random()*90) + 10;

    let username = user.username

    let embed = new Discord.MessageEmbed()
    .setTitle("Retardedness calculator...")
    .setColor("RANDOM")
    .setDescription(username + ` is ${dumb}% dumb.`)
    .setFooter("not legit unless true")
    .setTimestamp();

    message.channel.send(embed);

}

module.exports.help = {
    name: "howdumb",
    aliases: ["dumb"]
}