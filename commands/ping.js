const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send( {embed: {
        color: 'RANDOM',
        title: `Pinging...`,
        footer: {
            text: `Ponged by ${message.author.tag}`
        }
        }})
    m.edit( {embed: {
        color: 'RANDOM',
        title: `🏓 Pong! ${m.createdTimestamp - message.createdTimestamp}ms`,
        footer: {
            text: `Ponged by ${message.author.tag}`
        }
        }})
}

module.exports.help = {
    name: "ping",
    aliases: ["pong"]
}