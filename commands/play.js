exports.run = (client, message, args) => {
  const middlefinger = client.emojis.find(emoji => emoji.name === "qizman");
  message.delete();
  message.channel.send(`Music is not yet implemented becuase it aint easy to add to a bot.`);
}
