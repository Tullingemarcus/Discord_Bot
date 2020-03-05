const commando = require('discord.js-commando');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'start',
            group: 'basic',
            memberName: 'start',
            description: 'idk what this is'
        });
    }
    async run(message, args)
    {
        if (message.member) {
            message.channel.send('hejsan' + message.author, {});
        }
    }
}

module.exports = JoinChannelCommand;