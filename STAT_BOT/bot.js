var Discord = require('discord.js');
var auth = require('./auth.json');

var bot = new Discord.Client();


	bot.on('message', message=> {
		var prefix = '%'
		var msg = message.content;
		
		if (msg === prefix + 'hallå') {
			message.channel.send('hejsan', {
			});
		}
	});

const token = auth.token;


bot.login(auth.token);