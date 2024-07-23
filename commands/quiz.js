const { stripIndents } = require('common-tags');
const request = require('node-superfetch');
const types = ['multiple', 'boolean'];
const difficulties = ['easy', 'medium', 'hard'];
const choices = ['A', 'B', 'C', 'D'];
const { shuffle, list } = require('../utility.js');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (args.length < 2) {
        const unpog = new Discord.MessageEmbed()
        .setTitle("How to use command -")
        .setColor("RANDOM")
        .setDescription("Usage yo quiz {multiple/boolean} {easy/medium/hard} \n \n multiple = multiple choices (up to 4) \n boolean = true or false")
        .setFooter("Or you could've used yo cmd quiz lol")
        .setTimestamp();
        
        return message.channel.send(unpog);
    }

    let type = args[0];
    let difficulty = args[1];

    try {
        const { body } = await request
            .get('https://opentdb.com/api.php')
            .query({
                amount: 1,
                type,
                encode: 'url3986',
                difficulty
            });
        if (!body.results) return message.channel.send('Oh no, a question could not be fetched. Try again later!');
        const answers = body.results[0].incorrect_answers.map(answer => decodeURIComponent(answer.toLowerCase()));
        const correct = decodeURIComponent(body.results[0].correct_answer.toLowerCase());
        
        answers.push(correct);
        
        const shuffled = shuffle(answers);
        const quiz = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(stripIndents`
        **You have 20 seconds to answer this question.**
        ${decodeURIComponent(body.results[0].question)}
        ${shuffled.map((answer, i) => `**${choices[i]}**. ${answer}`).join('\n')}
    `)
        .setTitle("Quiz!")
        .setFooter("superfetch")
        .setTimestamp()
        await message.channel.send(quiz);

        const filter = res => res.author.id === message.author.id && choices.includes(res.content.toUpperCase());
        const messages = await message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000
        });

        const timeup = new Discord.MessageEmbed()
        .setDescription(`Sorry, time is up! It was ${correct}.`)
        .setTitle("Times up!")
        .setColor("RANDOM")
        .setFooter("superfetch")
        .setTimestamp()

        if (!messages.size) return message.channel.send(timeup);

        const win = shuffled[choices.indexOf(messages.first().content.toUpperCase())] === correct;

        const loser = new Discord.MessageEmbed()
        .setTitle(":cry: Wrong! :cry:"  )
        .setDescription(`Incorrect! It was ${correct}.`)
        .setColor("RANDOM")
        .setFooter("a lose is a lose")
        .setTimestamp();

        if (!win) return message.channel.send(loser);

        const won = new Discord.MessageEmbed()
        .setTitle(":tada: You're correct! :tada:")
        .setDescription("Congradulations, hope you didn't geuss that")
        .setTimestamp()
        .setFooter("cg")
        .setColor("RANDOM");

        return message.channel.send(won);
    } catch (err) {
        return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }

}


module.exports.help = {
    name: "quiz",
    aliases: ["test"]
}