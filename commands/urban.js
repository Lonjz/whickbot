var urban = require('easyurban');
const dict = new urban;
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (args.length < 1) {
        return message.channel.send('Please enter a word');
    }
    let word = args.join(' ');
    let result = await dict.lookup(word);
    dict.lookup(word)
    .then(result => {
        let sus = result.list[0]
        if (!sus) {
            return message.channel.send('No such word exist!');
        }
        const def = new Discord.MessageEmbed()
            .setTitle(word)
            .setDescription(sus.definition)
            .setColor("RANDOM")
            .addField('👍 Upvotes', sus.thumbs_up, true)
            .addField('👎 Downvotes', sus.thumbs_down, true)
            .setTimestamp(new Date())
            .setFooter(`📝 Written by ${sus.author}`);

        message.channel.send(def);
    })
    .catch(console.error)
}

module.exports.help = {
    name: "urban",
    aliases: ["dictionary"]
}