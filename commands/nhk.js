// command to play welcome to the nhk theme song here.
exports.run = (client, message, args) => {
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.join().then(connection =>
        {
           const dispatcher = connection.playFile('C:\Users\Max\Documents\GitHub\Mirai\audio\Puzzle.mp3');
           dispatcher.on("end", end => {
               //
             });
         }).catch(err => console.log(err));
}