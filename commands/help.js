const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = function(client, message) {

    const embed1 = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField(`N A S T Y Help`, `How to use me!`)
    .addField(`My prefix is: //`, `Soon, you can set your own custom prefix! (In Development)`)
    .addField(`IMPORTANT ANNOUNCEMENT`, `I am online 24/7 (if the VPS didn't crash), website is coming soon and Premium Version of me is on it's way!`)
    .addField(`There are a total of 4 modules`, `Moderation, Music, Fun and Custom`)

    const embed2 = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor('Moderation Commands', client.user.avatarURL)
    .addField('Commands: 3', 'List: \n //kick <mention> <reason> - Kick bad members \n //pruge <user> (amount) \n //prune <user> (amount)')

    const embed3 = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor('Music Commands', client.user.avatarURL)
    .addField('Commands: 6', 'List: \n //play <song URL **or** name> - Play songs [using YouTube] \n //join - Join a VoiceChannel \n //leave - Leave the VoiceChannel \n //radio - Tune in to the various radio stations! \n //queue - Shows the current song queue \n //skip - Skips the current song')

    const embed4 = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor('Fun/Misc Commands', client.user.avatarURL)
    .addField('Commands: 7', 'List: \n //dice - Rolls a dice (from 1-6) \n //flip - Heads or tail? \n //info - Information about me! \n //invite - Invite me! \n //list - Servers I am in! [Long List] \n //serverinfo - Get information of the server! \n //stats - My stats')

    const embed5 = new Discord.RichEmbed()
    .addField(`Additional links`, '[Click Here](https://www.discord.gg/pepWkm3) to join the Support Server | [Click Here](https://discordapp.com/oauth2/authorize?client_id=295292566855876611&scope=bot&permissions=271584318) to add me to your server!')
    .addField(`Shout out for these guys for helping develop this bot!`, `[ItsJustNasty - Owner](http://bit.ly/2y0n2Nh) \n [DusterTheFirst - Bot & Web Developer](http://bit.ly/2wjVD7g) \n [BoomerBoxer - Developer](http://bit.ly/2xVKYke) \n [Pie aka TheFalling Pie - Developer](http://bit.ly/2m343wi) \n [xKingAura - Web Developer](http://bit.ly/2mciKk7)`)
    .addField(`Thanks to them for hosting the bot!`, `Joël`)
    .setFooter(`Ping: ${Math.round(message.client.ping)}ms`)

    message.reply('check your DM!')
    message.author.send({embed: embed1});
    message.author.send({embed: embed2});
    message.author.send({embed: embed3});
    message.author.send({embed: embed4});
    message.author.send({embed: embed5});
};