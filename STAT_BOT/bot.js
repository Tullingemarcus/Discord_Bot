const Discord = require('discord.js-commando');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready',function(){
	console.log("ready")
});


bot.on('message', message=> {
	var prefix = '§'
	var msg = message.content;
	
	if (msg === prefix + 'hallå') {
		message.channel.send('hejsan' + message.author, {});
	}
	if (msg === prefix + 'tjena') {
		message.channel.send('/tts', {});
	}
});


bot.login(auth.token);