exports.run = function(client, message, args) {
   if (message.author.id !== "204483358909136896")
   return message.reply("This can only be used by the bot owner.") +
   console.log('Owner only command attemped by: ' + message.author.username + '(' + message.author.id + ')' + ' on ' + message.guild.name + '(' + message.guild.id + ')') +
   client.channels.find('id', '327014842932396032').send('User by the name of ' + message.author.username + ' tried to set status but failed.');


   var custom = message.content.split(' ').slice(1);
      if(!custom)
      return message.channel.send('Incorrect usage! `//status {game}`')
   client.user.setGame(custom);

   message.react('315009125694177281');
};