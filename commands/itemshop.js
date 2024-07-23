const { ftruncate } = require("fs");
const Client = require('fortnite');
const { stripIndents } = require("common-tags");
const { disconnect } = require("process");
const ft = new Client('238a9cbe-f4e4-4875-b392-499491c362fe');
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const store = await ft.store();
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Current Fortnite item shop`)
  .setColor("random")
  .setFooter("Fortnite")
  .setTimestamp()

  store.sort((a, b) => {
    return b.vbucks - a.vbucks
  });

  store.forEach(el => {
    embed.addField(el.name, stripIndents` Price: ${el.vbucks} VB
    Image: [Click](${el.image})`, true)
  });
  message.channel.send(embed);
}

module.exports.help = {
    name: "itemshop",
    aliases: []
}