const commando = require('discord.js-commando');


class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'core',
            memberName: 'leave',
            description: 'idk what this'
        });
    }
    
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("You must be in a voice channel to summon me!");
        }
    }
}

module.exports = JoinChannelCommand;