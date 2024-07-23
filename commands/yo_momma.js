const request = require('superagent');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    request
    .get('http://api.yomomma.info/')
    .end((err, res) => {
      if (!err && res.status === 200) {
        try {
          JSON.parse(res.text);
        }
        catch (e) {
          return message.reply('the API returned an unconventional response.');
        }
        const joke = JSON.parse(res.text);
        const embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/724055968249544818/769200202174693376/H1sbTxAAAAAElFTkSuQmCC.png")
        .setTitle(joke.joke)
        .setFooter("Not meant to offend anyone, only for jokes")
        .setTimestamp()
        .setColor("RANDOM");
        message.channel.send(embed);
      } else {
        console.error(`REST call failed: ${err}`);
      }
    });
}

module.exports.help = {
    name: "yomama",
    aliases: ["mama"]
}