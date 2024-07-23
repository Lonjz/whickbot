const randomPuppy = require("random-puppy");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl", "wholesomememes"];
          const random = subReddits[Math.floor(Math.random() * subReddits.length)];
          const img = await randomPuppy(random);
          const embed = new Discord.MessageEmbed()
              .setColor("RANDOM")
              .setImage(img)
              .setTitle(`Heres your meme`)
              .setFooter(`From r/${random}`)
              .setTimestamp()
              .setURL(`https://reddit.com/r/${random}`);
  
          message.channel.send(embed);
}

module.exports.help = {
    name: "meme",
    aliases: []
}