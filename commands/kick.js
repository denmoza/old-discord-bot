const Discord = require('discord.js');
const client = new Discord.Client;

exports.run = function(client, message, args){
const kickedPlayer = message.mentions.members.first();
const reason = message.content.split(' ').slice(2);

if (!kickedPlayer) return message.channel.send(`<@${message.author.id}> >> **Missing Argument!** You need to mention a user for me to ban!`).then(message => {
    message.delete(5000);
});

if (!reason) return message.channel.send(`<@${message.author.id}> >> **Missing Argument!** Please state a reason why do you want to banne the user.`).then(message => {
    message.delete(5000);
});


// If the user who runs the command have the perms to use the command
if (message.member.hasPermission("KICK_MEMBERS")){
    // If the bot have perms to kick the person
    if (client.guilds.member.hasPermission("KICK_MEMBERS")){
        //If the mentioned user is bannable
        if (kickedPlayer.bannable){
            kickedPlayer.kick()
            message.channel.send(`<@${message.author.id}> >> Success! Player is kicked! [Deleting message in 5 seconds`).then(message => {
                message.delete(5000);
            });
        } else {
            message.channel.send(`**Ooops!** I could not ban that user (${kickedPlayer}). He might be more OP then me! [Check if his role is higher then mine]`).then(message => {
                message.delete(5000);
            });
        }
    } else {
        message.channel.send(`<@${message.author.id}> >> Sorry! I do not have permissions to kick any user! [Requires KICK_MEMBERS]`).then(message => {
            message.delete(5000);
        });
    }
} else {
    message.channel.send(`:no_entry_sign: **Error:** You, <@${message.author.id}>, do not have the permissions to KICK any user(s) [Requires KICK_MEMBERS] :no_entry_sign:`);
}
};