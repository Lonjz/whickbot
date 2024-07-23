const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        return message.reply(
          ":no_entry: | You dont have `ADMINISTRATOR` Permission"
        );

        const say = args.join(" ")

        const embed = new Discord.MessageEmbed()
        .setDescription(say)
        .setTimestamp()
        .setColor("RANDOM");

        if(!say) return message.channel.send(":no_entry_sign: | **Say Something**")

        message.channel.send(embed);
        message.delete();

}

module.exports.help = {
    name: "embed",
    aliases: ["esay"]
}