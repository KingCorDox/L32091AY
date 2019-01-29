const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const YTDL = require("ytdl-core")

class StopCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'music',
            memberName: "stop",
            description: 'Will Stop a youtube link playing in a Voice Channel.'
        });
    }

    async run(message, args) {
        const Args = message.content.split(" ")
        if (message.author.equals(Bot.user)) return;
        if (message.channel.type === "dm") return;
        if (Testing === true) return;

        var Queue = Records[message.guild.id].Music;
       
	    if (!message.member.voiceChannel) return message.channel.send(':x: You are not in a voice channel!');
		if (!Queue) return message.channel.send(':warning: There is nothing playing that I could stop for you.');
		Queue.Queue = [];
		Queue.Connection.dispatcher.end('Stop command has been used!');
		return undefined;
    }
}

module.exports = StopCommand