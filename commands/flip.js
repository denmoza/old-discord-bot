exports.run = function(client, message, args) {
    var response = ['Heads', 'Tail'];
    message.channel.sendMessage('I choose ' + response[~~(Math.random() * response.length)])
  }