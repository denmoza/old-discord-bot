const warns = require("../warns.json");
const fs = require('fs');
exports.run = function(client, message, args) {
    const mentioned = message.mentions.users.first();
    args = message.content.split(' ').slice(1);
    const arg2 = Number(args[1]);
    if (message.member.hasPermission('KICK_MEMBERS')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
          if (!isNaN(arg2)) {
            if (warns[message.guild.id][mentioned.id] === undefined) {
              message.channel.send(mentioned.tag+" doesn't have any warnings.");
              return;
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
              message.channel.send("Warning doesn't exist.");
              return;
            }
            delete warns[message.guild.id][mentioned.id][arg2];
            var i = 1;
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
              var val=warns[message.guild.id][mentioned.id][key];
              delete warns[message.guild.id][mentioned.id][key];
              key = i;
              warns[message.guild.id][mentioned.id][key]=val;
              i++;
            });
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              delete warns[message.guild.id][mentioned.id];
            }
            message.channel.send(`Successfully removed ${mentioned.tag}\'s warning ${args[1]}!`);
            return;
          } if (args[1] === "all") {
            delete warns[message.guild.id][mentioned.id];
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
            message.channel.send(`Successfully cleared ${mentioned.tag}\'s warnings!`);
            return;
          } else {
            message.channel.send("Correct Usage: //clearwarn <user> <number|all>");
          }
        } else {
          message.channel.send("Correct Usage: //clearwarn <user> <number|all>");
        }
      } else {
        message.channel.send("Correct Usage: //clearwarn <user> <number|all>");
      }
    } else {
      message.channel.send("Error: You do not have the permission (\'KICK_MEMBERS\') to remove warnings.");
    }

};