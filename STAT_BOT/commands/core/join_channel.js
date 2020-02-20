const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'core',
            memberName: 'join',
            description: 'idk what this is'
        });
    }
    
    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("successfully joined!");
                    })
            }
        }
        else
        {
            message.reply("You must be in a voice channel to summon me!");
        }
    }
}

module.exports = JoinChannelCommand;