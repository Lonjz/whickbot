const Discord = require('discord.js');
const client = new Discord.Client()

module.exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Bot Stats")
    .addField('Servers :' , `${client.guilds.cache.size}`, true)
    .addField('Users :' , `${client.users.cache.size}`, true)
    .setFooter("Whick Bot")
    .setTimestamp()

    message.channel.send(embed);


}

module.exports.help = {
    name: "stats",
    aliases: ["botstat"]
}