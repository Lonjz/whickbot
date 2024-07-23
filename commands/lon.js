const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

module.exports.run = async (client, message, args) => {
    
    let dev = client.users.cache.find(user => user.id == "705085537723088986");
    let av = dev.avatarURL({ dynamic: true, size: 1024});

    const embed = new Discord.MessageEmbed()
    .setTitle("Lon")
    .setAuthor("Developer")
    .setColor("RANDOM")
    .setThumbnail(av)
    .setDescription("**Fun Facts / Achievements** \n 1. Made a website in less than 5 hours \n 2. Grinded to teir 100 in Fortnite on under 20 fps \n 3. Owns a 'gaming team' :man_facepalming: \n 4. Binge watched AOT season 1-3 in 2 days \n 5. Uses a lot of 02 pfps")
    .setURL("http://londev.cf")
    .setFooter("e e")
    .setTimestamp()

    message.channel.send(embed)
}

module.exports.help = {
    name: "lon",
    aliases: ["dev", "developer", "@<!705085537723088986>"]
}