const Discord = require('discord.js-commando');
const auth = require('./auth.json');
const bot = new Discord.Client();
const cmd_list = require('commands/command_list.js')
const weather_api = require('api/wether_api_settings.js')
const axios = require('axios') 

bot.registry.registerGroup('core', 'Core');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready',function(){
	console.log("ready")
});


bot.on('message', async, message=> {
	var prefix = '§'
	var msg = message.content;
	
	for (i in command_list)
		if (msg === prefix + cmd_list.command_list(i))
			cmd_list.command_dict(i(msg))

	if (msg === prefix + 'hallå') {
		message.channel.send('hejsan' + message.author, {});
	}
	if (msg === prefix + 'help') {
		message.channel.send('Hello I am Lester. I am a simple bot with the main functions\ of playing music, check the weather and set an alarm or timer.\ Here are some commands:\ §play\ §stop\ §skip\ §weather\ §timer\ §alarm\ for more information visit:\ https://github.com/Tullingemarcus/Discord_Bot/blob/master/README.md', {});
	}

	if (msg === prefix + 'einar') {
		message.channel.send('Hello I am your programming teacher, I can help you with git and python\ ', {});
	
	if (msg === prefix + 'weather'){
		let getweather = async () => {	
			let response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + weather_api.city + ',' + weather_api.country + '&appid=' + weather_api.api_key)
			let weather = response.data
			return weather
		}
		let weather = await getweather()
		console.log(weather)
		wind_dict = {
			"NE":{"min_deg": 23, "max_deg": 68, "direction": "nordöstlig"},
			"E":{"min_deg": 68, "max_deg": 113, "direction": "östlig"},
			"SE":{"min_deg": 113, "max_deg": 158, "direction": "sydöstlig"},
			"S":{"min_deg": 158, "max_deg": 203, "direction": "sydlig"},
			"SW":{"min_deg": 203, "max_deg": 248, "direction": "sydvästlig"},
			"W":{"min_deg": 248, "max_deg": 293, "direction": "västlig"},
			"NW":{"min_deg": 293, "max_deg": 338, "direction": "nordvästlig"},
		}
		temporary = "nordlig"
		for (wind_direction in wind_dict)
			if  (int(weather["wind"]["deg"]) < wind_dict[wind_direction]["min_deg"]) and (int(weather["wind"]["deg"]) < wind_dict[wind_direction]["max_deg"])
				var temporary = wind_dict["wind"]["direction"]
		
		weather["wind"]["deg"] = temporary
		
		if (weather["clouds"]["all"] < 100)
			weather["wind"]["all"] = "mycket målnigt"
		elif (weather["clouds"]["all"] < 75)
			weather["wind"]["all"] = "måtligt målnigt"
		elif (weather["clouds"]["all"] < 50)
			weather["wind"]["all"] = "något målnigt"
		elif (weather["clouds"]["all"] < 25)
			weather["wind"]["all"] = "lätt målnigt"
		elif (weather["clouds"]["all"] < 5)
			weather["wind"]["all"] = ""
		
		msg.reply(
			'In ${weather[name]},${weather[sys][country]} är det ${weather[main][temp]} grader och en ${weather[wind][speed]}m/s vind i en ${weather[wind][deg]} riktning, det är också ${weather[wind][all]}'
		)
	}


});


bot.login(auth.token);