const Discord = require('discord.js');
const channelTypes = {
    dm: 'DM',
    group: 'Group DM',
    text: 'Text Channel',
    voice: 'Voice Channel',
    category: 'Category',
    unknown: 'Unknown',
}

module.exports.run = async (client, message, args) => {

    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(
      ":no_entry: | You dont have `ADMINISTRATOR` Permission"
    );

    const channel = message.channel || message.guild.channels.get(args[0]);

    if (!channel) {
        return message.reply('please enter a valid channel.');
    }
   
    let channelEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.guild.iconURL)
            .setTitle('Channel Info')
            .addField(':arrow_right: Name', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, true)
            .addField(':arrow_right: ID', channel.id, true)
            .addField(':arrow_right: Creation Date', channel.createdAt.toDateString(), true)
            .addField(':arrow_right: NSFW', channel.nsfw ? 'Yes' : 'No', true)
            .addField(':arrow_right: Category', channel.parent ? channel.parent.name : 'None', true)
            .addField(':arrow_right: Type', channelTypes[channel.type], true)
            .addField(':arrow_right: Topic', channel.topic || 'None', true)
            .setFooter("channel info")
            .setTimestamp();

    message.channel.send(channelEmbed);
}

module.exports.help = {
    name: "channel",
    aliases: ["channelinfo"]
}