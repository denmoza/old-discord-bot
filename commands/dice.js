exports.run = function(client, message, args) {
    var response = ['1', '2', '3', '4', '5', '6'];
    message.channel.send('The dice have chosen: ' + response[~~(Math.random() * response.length)])


    var img = ['img1.jpg', 'img2.jpg', 'img3.png', 'img4.jpg'];
    var randomImg = img[~~(Math.random() * img.length)];

    message.channel.send(`A panda!`, {
        files: [
          `./images/${randomImg}`
        ]
      });

}