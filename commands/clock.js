const commando = require('discord.js-commando');

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var t = setTimeout(startTime, 500);
    var time = h + ":" + m + ":" + s;
    return time;
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clock',
            group: 'basic',
            memberName: 'clock',
            description: 'idk what this is'
        });
    }
    async run(message, args)
    {
        if (message.member) {
            message.channel.send(startTime(), {});
        }
    }
}

module.exports = JoinChannelCommand;