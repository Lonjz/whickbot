const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES
  
    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
      .setTitle("Command: Kick")
      .setDescription("Usage: yo kick @<USER>")
      .setColor("RANDOM");
      message.channel.send(kickinfoembed);
  
      return;
    }
  
    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot kick yourself!`)
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
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `KICK MEMBERS` contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `KICK MEMBERS` permission, please contact an administrator"
        )
        .setColor("RANDOM");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.member(kicked).kick(reason).catch(err => {
      message.channel.send("Error! " + err);
      return;
    });
  
    let successfullyembed = new Discord.MessageEmbed()
      .setDescription(`${kicked.tag} has been successfully kicked.`)
      .setColor("RANDOM");
  
    message.channel.send(successfullyembed);

  }

module.exports.help = {
    name: "kick",
    aliases: []
}