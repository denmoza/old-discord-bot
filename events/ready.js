const settings = require('../settings.json');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = client => {
	client.login(settings.token);
  console.log('Alive!');
  client.user.setPresence({ game: { name: `${client.guilds} guilds | //help`, type: 3 } });
};
