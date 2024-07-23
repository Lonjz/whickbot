const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const fs = require("fs");


module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTitle("Commands List")
    .setDescription("yo help")
    .setColor("RANDOM")
    .addField(':tools: **Mod cmds**', '`helpmod`', true)  
    .addField(':information_source: **Info cmds**', '`helpinfo`', true)
    .addField(':jigsaw: **Util cmds**', '`helput`', true)
    .addField(':tada: **Fun cmds**', '`helpfun`', true)
    .addField(':robot: **Abt cmds**', '`helpbot`', true)  
    .addField(':moneybag: **Economy cmds**', '`helpeco`', true)     
    .setFooter(`Do yo help<category> for more info!`)
    .setTimestamp()

    message.channel.send(embed)

}


module.exports.help = {
    name: "help",
    aliases: []
}