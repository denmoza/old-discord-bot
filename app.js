const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const ddiff = require('return-deep-diff');
const chalk = require('chalk');
var quickGist = require('quick-gist');

const fs = require('fs');

require('./util/eventLoader')(client);

// For detecting if the user have a specific role
function hasRole(mem, role){
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
} 

process.on('unhandledRejection', (error, p) => {
	if (error instanceof Error)
			console.log(`Unhandled promise rejection: ${error.stack}`);
	else
			console.log(`Unhandled promise rejection: ${error}`);
});

var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success!`).then(
		response => response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('debug', e => {
  //console.log(e);
});

client.on('message', message => {
	if(message.author.bot) return;
});
client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(settings.token);
