const Discord = require('discord.js');
const client = new Discord.Client();
const quickGist = require('quick-gist');

exports.run = function(client, message) {
    message.channel.send('Generating...').then(message => {
        quickGist({
            content: `${client.guilds.map(guild => guild.name + "\n")}`,
            description: `Sevrers that I am in!`,
            public: true, 
        }, function(err, resp, data) {
            message.author.send(`${data.html_url}`);
        });
        message.edit(`${message.author.id}, check your DM!`);
    });
  } 