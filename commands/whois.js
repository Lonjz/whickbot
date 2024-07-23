const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const moment = require('moment');

module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        return message.reply(
          ":no_entry: | You dont have `ADMINISTRATOR` Permission"
        );
    let user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);
    const joinDiscord = moment(user.createdAt).format('llll');
    const avatar = user.avatarURL({ dynamic: true, size: 1024});
    let embed = new Discord.MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
        .setThumbnail(avatar)
        .addField("ID:", `${user.id}`, true)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("Joined Server at:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
        .addField('Created at:', `${joinDiscord}`, true)
        .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .addField("Bot:", `${user.bot}`, true)
        .setTimestamp();

    message.channel.send(embed);
    
}

module.exports.help = {
    name: 'whois',
    aliases: ["who",]
}