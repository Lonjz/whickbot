const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const say = args.join(" ")
    if(!args[0]) {
        message.reply('Please ask me a question.');
      }
      else {
        let eightball = [
        'It is certain.',
        'Nah bro',
        'NO WAY WON\'T HAPPEN :skull:',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don\'t count on it.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.',
        'No way.',
        'Maybe',
        'The answer is hiding inside you',
        'No.',
        'Depends on the mood of the CS god',
        'Hang on',
        'It\'s over',
        'It\'s just the beginning',
        'Good Luck',
        'Of course',
        ];
        
        let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(say + " ?")
        .setDescription(`A: ${eightball[index]}`)
        .setTimestamp()
        .setFooter(`Asked by ${message.author.tag}`)
        message.channel.send(embed);
      }
}

module.exports.help = {
    name: "8ball",
    aliases: ["eightball"]
}