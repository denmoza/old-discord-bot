const Discord = require('discord.js')
const client = new Discord.Client()

exports.run = function(client, message, args) {
	const subCommand = args.slice(1).join(" ");	
	if(!subCommand){
		const embed = new Discord.RichEmbed()
		.setColor(0x9370db)
		.setAuthor(`Purge Command`)
		.addField(`Important Note`, `You will need [MANAGE_MESSAGES] permission. Something wrong? Join the Support Server to let the Devs know!`)
		.addField('Legend', `(optional) - Optional \n <required> - Required`)
		.addField('Commands', '\n //purge (mention) <amount> \n //prune (mention) <amount>')
		.addField('Usage' , `How to use the command! \n Example: //purge @ItsJustNasty 10** \n Example: //purge 10 \n Example: //prune @ItsJustNasty 10 \n Example: //prune 10`)
		.setFooter(`Purge Command`)
		.setTimestamp()

		message.channel.send({embed: embed});
	} else {
		if (message.member.hasPermission('MANAGE_MESSAGES')){
			const user = message.mentions.users.first();
			const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
			if (!amount) return message.reply('please specify an amount to delete!');
			if (!amount && !user) return message.reply('please specify a user and amount, or just an amount, of messages to purge!');
			message.channel.fetchMessages({
			limit: amount,
			}).then((messages) => {
			if (user) {
			const filterBy = user ? user.id : Client.user.id;
			messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
			}
			message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
			});
		} else {
			message.channel.send(`<@${message.author.ID}> >> Sorry! You do not have the permissions to use the command! [Require MANAGE_MESSAGES]`).then(message => {
				message.delete(5000);
			})
		}
	}
};