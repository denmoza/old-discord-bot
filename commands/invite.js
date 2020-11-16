exports.run = function(client, message) {
message.reply('Check your DM!')
  message.author.send({
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'N A S T Y Invite',
    url: 'http://www.google.com',
    description: 'Invite me!',
    fields: [{
        name: `Bot's Prefix`,
        value: 'The bot is using `//` prefix!'
      },
      {
        name: 'Links about the bot. Everything and anything about the bot',
        value: '[Click Here](https://www.discord.gg/pepWkm3) for the **N A S T Y** server | [Click Here](https://discordapp.com/oauth2/authorize?client_id=295292566855876611&scope=bot&permissions=271584318) to add me to your server!'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '© Made by @ItsJustNasty | Last Updated 31/5/2017'
    }});
}