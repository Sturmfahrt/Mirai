exports.run = (client, message, args) => {
    var voiceChannel = message.member.voiceChannel;
    message.delete();
    voiceChannel.leave();
}