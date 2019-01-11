exports.run = (client, message, args) => {
  message.delete();
  const fs = require('fs');
  const ytdl = require('ytdl-core');
  const streamOptions = { seek: 0, volume: 1 };
  
  var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection => {
      console.log("joined channel");
      const stream = ytdl(args[0], { filter : 'audioonly'});
      const dispatcher = connection.playStream(stream, streamOptions);
      dispatcher.on("end", end => {
        console.log("left channel");
        voiceChannel.leave();
      });
    }).catch(err => console.log(err));
    message.reply('your song is coming up.')
}
