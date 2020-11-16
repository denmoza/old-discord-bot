const Discord = require('discord.js');
const client = new Discord.Client();
const Gamedig = require('gamedig');

exports.run = function(client, message, args) {
var text = message.content.split(" ").splice(1).join(" ");

// Check if the bot have permissions for embed
if (message.channel.permissionsFor(client.user).has('EMBED_LINKS')){
    // If the bot have Embed Permission
        if (message.content === `//mc --normal ${text}`){
            Gamedig.query({
                type: 'minecraft',
                host: `${text}`
            },
            function(e,state) {
                const stat1 = new Discord.RichEmbed()
                .setTitle('<:minecraft:346723754656661506> Minecraft <:minecraft:346723754656661506>')
                .setColor(0x00FF00)
                .addField(' Server IP ', `${state.host}`)
                .addField(` Server's Description ` , `${state.raw.description}`)
                .addField(` Players `, `${state.players.length} out of ${state.maxplayers}`)
                .addField(` Version `, `${state.raw.version}`)
                .setFooter(` Mined by ${message.author.username}`)
                .setTimestamp()
                if(e) message.channel.send(`Error: I could not connect to ${text}. Try typing (//mc --ping ${text}).`);
                else message.channel.sendEmbed(stat1);
            });
        } else if (messgae.content === `//mc --ping ${text}`){
            Gamedig.query({
                type: 'minecraftping',
                host: `${text}`
            },
            function(e,state) {
                const stat1 = new Discord.RichEmbed()
                .setTitle('<:minecraft:346723754656661506> Minecraft <:minecraft:346723754656661506>')
                .setColor(0x00FF00)
                .addField(' Server IP ', `${state.host}`)
                .addField(` Server's Description ` , `${state.raw.description}`)
                .addField(` Players `, `${state.players.length} out of ${state.maxplayers}`)
                .addField(` Version `, `${state.raw.version}`)
                .setFooter(` Mined by ${message.author.username}`)
                .setTimestamp()
                if(e) message.channel.send(`Error: I could not connect to ${text}. Try typing (//mc --normal ${text}).`);
                else message.channel.sendEmbed(stat1);
            });
        } else {
            messgae.reply(`please enter an option. Example: //mc --ping ${text} or //mc --normal ${text} or for mobile users //mc --mobile --ping/normal ${text}. More information type //mc --help`)
        }
} else {
    // If the bot have no Embed Permission
        if (message.content === `//mc --normal ${text}`){
            Gamedig.query({
                type: 'minecraft',
                host: `${text}`
            },
            function(e,state) {
                if(e) message.channel.send(`Error: I could not connect to ${text}. Try typing (//mc --ping ${text}).`);
                else message.channel.send(`<@${message.author.id}>: Server is online using version (${state.raw.version}). Players: ${state.players.length} out of ${state.maxplayers}.`)
            });
        } else if (messgae.content === `//mc --ping ${text}`){
            Gamedig.query({
                type: 'minecraftping',
                host: `${text}`
            },
            function(e,state) {
                if(e) message.channel.send(`Error: I could not connect to ${text}. Try typing (//mc --normal ${text}).`);
                else message.channel.send(`<@${message.author.id}>: Server is online using version (${state.raw.version}). Players: ${state.players.length} out of ${state.maxplayers}.`)
            });
        } else {
            messgae.reply(`please enter an option. Example: //mc --ping ${text} or //mc --normal ${text} or for mobile users //mc --mobile --ping/normal ${text}. More information type //mc --help`)
        }
}

// Mobile Command
    if (message.content === `//mc --mobile --ping`) {
        Gamedig.query({
            type: 'minecraftping',
            host: `${text}`
        },
        function(e,state) {
            if(e) message.channel.send(`Server is offline`);
            else message.channel.send(`Server is online using version (${state.raw.version}). Players: ${state.players.length} out of ${state.maxplayers}.`);
        });
    } else if (message.content === `//mc --mobile --normal`) {
        Gamedig.query({
            type: 'minecraft',
            host: `${text}`
        },
        function(e,state) {
            if(e) message.channel.send(`Server is offline`);
            else message.channel.send(`Server is online using version (${state.raw.version}). Players: ${state.players.length} out of ${state.maxplayers}.`);
        });
    } else {
        messgae.reply(`please enter an option. Example: //mc --ping ${text} or //mc --normal ${text} or for mobile users //mc --mobile --ping/normal ${text}. More information type //mc --help`)
    }
    
// Help Command
    if (message.content === `//mc --help`){
        message.reply('help');
    }
};