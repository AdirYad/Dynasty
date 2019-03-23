const commando = require('discord.js-commando');
const discord = require('discord.js');

class threadResMes extends commando.Command {
	constructor(client) {
		super(client);
	}

	async run(message, args) {
		const myInfo = new discord.RichEmbed()
			.setDescription("hello")
			.setColor(green);
			
	}
}

module.exports = infoAboutMeCommand;