const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();
    if(!user){
        return message.channel.send("Use: `yo nick @user nickname`");
    }
    let member = message.guild.members.cache.get(user.id);
    let name = args[1];

    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to do that 😐');
    if (!message.member.permissions.has("MANAGE_NICKNAMES")) return message.channel.send('You do not have the `MANAGE_NICKNAMES` permission!');

    let works = true;

    member.setNickname(name).catch(err => {
        message.channel.send("Error! " + err);
        works = false;
        return;
    });

    if(works){
    message.channel.send(`You changed ${user.username}\'s name to ${name}`);
    }
}

module.exports.help = {
    name: "nick",
    aliases: []
}