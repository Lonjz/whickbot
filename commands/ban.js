const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {



    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");

  
    // MESSAGES
  
    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Command: ban")
        .setDescription("Usage: yo ban @<USER>")
        .setColor("RANDOM");
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot **BAN** yourself!`)
        .setColor("RANDOM");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Enter a reason`)
        .setColor("RANDOM");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `BAN MEMBERS` contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `BAN MEMBERS` permission, please contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason }).catch(err => {
      message.channel.send("Error! " + err);
      return;
    });
  
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${banned.tag} has been successfully banned.`)
      .setColor("RANDOM");
  
    message.channel.send(successfullyembed);

  } 
  


module.exports.help = {
    name: "ban",
    aliases: []
}