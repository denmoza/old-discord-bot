exports.run = function(client, message, args) {
if (message.author.id !== "204483358909136896")
   return message.reply("This can only be used by the bot owner.") +
   client.channels.find('id', '327014842932396032').send('User by the name of ' + message.author.username + ' tried to use eval but failed.') +
   console.log('Owner only command attemped by: ' + message.author.username + '(' + message.author.id + ')' + ' on ' + message.guild.name + '(' + message.guild.id + ')');
   var evalcode = message.content.split(" ").splice(1).join(" ");
      try {
        var evaled = eval(evalcode);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        message.channel.send("Output:\n```x1\n" + clean(evaled) + "```");
      client.channels.find('id', '327014842932396032').send('User by the name of ' + `${message.author.username}` + ' in ' + message.guild.name + ' used eval successfully.');
      }
      catch (err) {
        message.channel.send("Error: " + clean(err));
        client.channels.find('id', '327014842932396032').send('User by the name of ' + message.author.username + ' failed to use eval.');
      }

      function clean(text) {
        if (typeof(text) === "string") {
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        }
        else {
          return text;
        }
    }

};