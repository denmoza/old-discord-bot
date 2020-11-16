const Discord = require('discord.js'),
      client = new Discord.Client(),
      gist = require('gist');
      cheerio = require('cheerio'),
      snekfetch = require('snekfetch'),
      querystring = require('querystring');

// Google search command
exports.run = function(client, message, args) {
    var author = message.author.username;
    const searchContent = message.content.split(' ').slice(1);   

    message.channel.send(`<@${message.author.id}> **>>** Searching, please wait...`).then(message => {
        let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchContent)}`;

        return snekfetch.get(searchUrl).then((result) => {
            let $ = cheerio.load(result.text);
            let googleData = $('.r').first().find('a').first().attr('href');
            googleData = querystring.parse(googleData.replace('/url?', ''));

            const embed = new Discord.RichEmbed()
            .setColor(0x00FF00)
            .addField('Result Found!', `Input: ${searchContent}`)
            .addField('Results:', `${googleData.q}`)
            .addField('Something wrong?', `If you find a bug, please inform the devs at the support server!`)
            .setFooter(`Google Search | Requested by: ${author}`)

            message.edit({embed: embed});
        }).catch((err) =>{

            const embed = new Discord.RichEmbed()
            .setAuthor('Error')
            .setColor(0xFF0000)
            .addField('Sorry', `There is an error searching **or** there are no results found.`)
            .addField('Error Message', `If it is TypeError, it means that you have to specify what you want to search. \n ${err}`)
            .addField('Something wrong?', `If you find a bug, please inform the devs at the support server!`)
            .setFooter(`Google Search | Requested by: ${author}`)
            message.edit({embed: embed});
        });
    });
};