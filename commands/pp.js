const { DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;

    var number = Math.floor(Math.random() * 15 + 1);
    let pog = "";

    var i = 0;
    do {
        i++;
        pog = pog + "=";
    } while(i <= number);

    const member = user.username;

    const embed = new Discord.MessageEmbed()
    .setTitle(member + "'s PP Size")
    .setDescription("8" + pog + "D")
    .setFooter("It's a joke yeesh")
    .setColor("RANDOM")
    .setThumbnail(user.avatarURL({ dynamic: true, size: 1024}))
    .setTimestamp();

    message.channel.send(embed);

}

module.exports.help = {
    name: "pp",
    aliases: []
}