const Discord = require('discord.js-commando');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.registry.registerGroup('core', 'Core');
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
	
});


bot.login(auth.token);