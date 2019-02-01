const Commando = Depends.Commando
const Discord = Depends.Discord


class QueueCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'queue',
            group: 'music',
            memberName: "queue",
            description: 'Will Show the current list of youtube links playing in a Voice Channel.'
        });
    }

    async run(message, args) {
        const Args = message.content.split(" ")
        if (message.author.equals(Settings.Bot.user)) return;
        if (message.channel.type === "dm") return;
        if (Settings.Testing === true) return;

        var Queue = Records[message.guild.id].Music;
	    if (!Queue) return message.channel.send(':x: There is nothing playing.');
	    let Count = 0	
	    let Embed = new Discord.RichEmbed()
	    .setColor("#27037e")
	    .setTitle(":musical_note: Song Queue :musical_note:")
	    .setDescription(`${Queue.Queue.map(song => `${++Count}. ${song.title}`).join('\n')}`);
	    return message.channel.send("Current Songs Playing Now on Lyaboo", Embed)
    }
}

module.exports = QueueCommand
