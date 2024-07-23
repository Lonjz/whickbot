const Discord = require('discord.js');
const { prefix, token, test_token } = require('./config.json');
const client = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const config = require('./config.json');

const mongoose = require('mongoose');

mongoose.connect(config.mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const DBL = require('dblapi.js');
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNDA5NzQ0MjUwNDcwNDAzMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1MzkwNzc4fQ.m9_Z2mx1GY71T5NUZ6H0m3T2UgbyVOJy1-cwzadgNT8", client);


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if(jsfile.length <= 0) {
		return console.log("No cmds found");
	}

	jsfile.forEach((f) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} has loaded`)
		client.commands.set(props.help.name, props);

		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name);
		})
	})
})

client.on('ready', () => {
	console.log(client.user.username + ' has successfully booted up.');
	client.user.setActivity(`yo help | yo server`)
});

client.on('message', async message =>{ //handler
	
	if (message.author.bot) return;
	if (message.channel.type == "dm") return;
	if (!message.content.startsWith(prefix)) return;	

	let args = message.content.slice(prefix.length).trim().split(/ +/g );
	let cmd = args.shift().toLowerCase();
	let command;

	if(client.commands.has(cmd)) {
		command = client.commands.get(cmd);
	} else if(client.aliases.has(cmd)) {
		command = client.commands.get(client.aliases.get(cmd));
	}

	try {
		command.run(client, message, args);
	} catch(e) {
		return;
	}
});

client.login(token);
