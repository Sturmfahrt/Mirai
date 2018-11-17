exports.run = (client, message, args) => {
  const qizman = client.emojis.find(emoji => emoji.name === "qizman");
  message.delete();
  message.channel.send(`${qizman} Gay`);
}
