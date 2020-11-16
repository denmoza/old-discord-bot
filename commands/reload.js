const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message, args) {
    if (message.author.id === "204483358909136896" || message.author.id === "281073778207752197" || message.author.id === "189131100889677825" || message.author.id === "265071448182358018" || message.author.id === "168827261682843648"){       
        var cmd = args;
        delete require.cache[require.resolve('./' + `${cmd}.js`)];
            try {
                let cmdFile = require('./' + `${cmd}.js`);
            } catch (err) {
                message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
                    response => response.delete(100000).catch(error => console.log(error.stack))
                ).catch(error => console.log(error.stack));
            }
        message.channel.send(`Reloaded the command: ${cmd}!`).catch(error => console.log(error.stack));
    } else {
        return;
    }
};