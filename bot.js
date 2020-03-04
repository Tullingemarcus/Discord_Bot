const Discord = require('discord.js-commando');
const auth = require('./auth.json');
const bot = new Discord.Client();
const cmd_list = require('commands/command_list.js')
const wether_api = require('api/wether_api_settings.js')
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
	
	if (msg === prefix + 'wether'){
		let getwether = async () => {	
			let response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + wether_api.city + ',' + wether_api.country + '&appid=' + wether_api.api_key)
			let wether = response.data
			return wether
		}
		let wether = await getwether()
		console.log(wether)
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
			if  (int(wether["wind"]["deg"]) < wind_dict[wind_direction]["min_deg"]) and (int(wether["wind"]["deg"]) < wind_dict[wind_direction]["max_deg"])
				var temporary = wind_dict["wind"]["direction"]
		
		wether["wind"]["deg"] = temporary
		
		if (wether["clouds"]["all"] < 100)
			wether["wind"]["all"] = "mycket målnigt"
		elif (wether["clouds"]["all"] < 75)
			wether["wind"]["all"] = "måtligt målnigt"
		elif (wether["clouds"]["all"] < 50)
			wether["wind"]["all"] = "något målnigt"
		elif (wether["clouds"]["all"] < 25)
			wether["wind"]["all"] = "lätt målnigt"
		elif (wether["clouds"]["all"] < 5)
			wether["wind"]["all"] = ""
		
		msg.reply(
			'In ${wether[name]},${wether[sys][country]} är det ${wether[main][temp]} grader och en ${wether[wind][speed]}m/s vind i en ${wether[wind][deg]} riktning, det är också ${wether[wind][all]}'
		)
	}


});


bot.login(auth.token);