exports.run = (client, message, args) => {
    var voiceChannel = message.member.voiceChannel;
    voiceChannel.leave();
}