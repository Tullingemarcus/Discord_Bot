const Discord = require('discord.js-commando');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.registry.registerGroup('core', 'Core');
bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready',function(){
	console.log("ready")
});


bot.login(auth.token);