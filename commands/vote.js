const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let vote = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Vote on Top.gg - Soon gives coins!")
    .setDescription("Voting will soon give 100 coins in the economy commands!")
    .setTimestamp()
    .setFooter("ty for the support :)")
    .setURL("https://top.gg/bot/734097442504704032/vote")
    
    message.channel.send(vote);

}

module.exports.help = {
    name: "vote",
    aliases: []
}