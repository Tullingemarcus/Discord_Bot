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
	if (msg === prefix + 'help') {
		message.channel.send('Hello I am Lester. I am a simple bot with the main functions\ of playing music, check the weather and set an alarm or timer.\ Here are some commands:\ §play\ §stop\ §skip\ §weather\ §timer\ §alarm\ for more information visit:\ https://github.com/Tullingemarcus/Discord_Bot/blob/master/README.md', {});
	}

	if (msg === prefix + 'einar') {
		message.channel.send('Hello I am your programming teacher, I can help you with git and python\ ', {});

	}
});


bot.login(auth.token);