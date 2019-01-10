// command to play welcome to the nhk theme song here.
exports.run = (client, message, args) => {
    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.join().then(connection =>
        {
           const dispatcher = connection.playFile('/home/max/Documents/Mirai/audio/Puzzle.mp3');
           dispatcher.on("end", end => {
               voiceChannel.leave();
             });
         }).catch(err => console.log(err));
}